import { HttpException, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../core/db/prisma_service/prisma.service';
import { TokenStandard } from '@metaplex-foundation/mpl-token-metadata';
import { Connection, Keypair, PublicKey, Signer } from '@solana/web3.js';
import * as bs58 from 'bs58';
import { CreateNftDto } from './dto/create.nft.dto';
import {
  bundlrStorage,
  CreateNftBuilderContext,
  keypairIdentity,
  Metaplex,
  TransactionBuilder,
} from '@metaplex-foundation/js';

@Injectable()
export class SolanaService {
  constructor(
    @Inject(PrismaService)
    private readonly prismaService: PrismaService,
  ) {}
  async createSolNft(item: CreateNftDto) {
    const brandData: { keyPair: Keypair; name: string } =
      await this.getBrandNameAndKeyPair(item.brand_id);
    const userPubKey: PublicKey = await this.getUsersPublicKey(item.user_id);
    const connection = new Connection(
      'https://api.devnet.solana.com',
      'confirmed',
    );
    const metaplex = Metaplex.make(connection)
      .use(keypairIdentity(brandData.keyPair))
      .use(
        bundlrStorage({
          address: 'https://devnet.bundlr.network',
          providerUrl: 'https://api.devnet.solana.com',
          timeout: 60000,
        }),
      );
    const signer: Signer = {
      publicKey: brandData.keyPair.publicKey,
      secretKey: brandData.keyPair.secretKey,
    };

    const { uri: newUri } = await metaplex.nfts().uploadMetadata({
      collection: {
        name: 'VOXVIL3',
        family: 'VoxVil3',
      },
      name: 'VoxVil3 NFT',
      description: 'VoxVil3 member NFT',
      symbol: brandData.name,
      imageName: brandData.name,
      external_url: 'https://voxvil3.com',
      image: item.imgUrl,
      attributes: item.item,
    });

    const CONFIG = {
      sellerFeeBasisPoints: 0, //500 bp = 5%
      creators: [{ address: brandData.keyPair.publicKey, share: 100 }],
      metadata: newUri,
    };

    const transactionBuilder: TransactionBuilder<CreateNftBuilderContext> =
      await metaplex.nfts().builders().create({
        updateAuthority: signer,
        tokenOwner: userPubKey,
        symbol: brandData.name,
        mintTokens: true,
        uri: CONFIG.metadata,
        name: 'VOXVIL3 NFT',
        sellerFeeBasisPoints: CONFIG.sellerFeeBasisPoints,
        isMutable: true,
        isCollection: false,
        tokenStandard: TokenStandard.NonFungible,
      });

    const { signature, confirmResponse } = await metaplex
      .rpc()
      .sendAndConfirmTransaction(transactionBuilder);
    if (confirmResponse.value.err) {
      throw new Error('failed to confirm transaction');
    }
    const { mintAddress } = transactionBuilder.getContext();
    await this.setUsersNft(item.user_id, mintAddress.toBase58(), item.brand_id);
    await this.prismaService.assets.create({
      data: {},
    });
    return {
      mintAddress: mintAddress,
      checkMint:
        'https://explorer.solana.com/address/' +
        mintAddress.toBase58() +
        '?cluster=devnet',
    };
  }

  async getBrandNameAndKeyPair(
    brand_id: number,
  ): Promise<{ keyPair: Keypair; name: string }> {
    const brand = await this.prismaService.brands.findUnique({
      where: { id: brand_id },
    });
    return {
      keyPair: Keypair.fromSecretKey(bs58.decode(brand.secret_key)),
      name: brand.name,
    };
  }

  async getUsersPublicKey(user_id: number): Promise<PublicKey> {
    const user = await this.prismaService.vox_user.findUnique({
      where: { id: user_id },
    });
    if (!user) {
      throw new HttpException(`User with ${user_id} id not found`, 404);
    }
    return new PublicKey(user.wallet_address);
  }

  async setUsersNft(user_id: number, nft_address: string, brand_id: number) {
    try {
      await this.prismaService.member_nft.create({
        data: {
          address: nft_address,
          created_at: new Date(),
          brand_id: brand_id,
          user_id: user_id,
        },
      });
    } catch (e) {
      throw new HttpException('User cant found ', 404);
    }
  }
}
