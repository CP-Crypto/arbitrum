/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from 'ethers'
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface HashingTesterInterface extends ethers.utils.Interface {
  functions: {
    'testMerkleHash(bytes)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'testMerkleHash',
    values: [BytesLike]
  ): string

  decodeFunctionResult(
    functionFragment: 'testMerkleHash',
    data: BytesLike
  ): Result

  events: {}
}

export class HashingTester extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: HashingTesterInterface

  functions: {
    testMerkleHash(buf: BytesLike, overrides?: CallOverrides): Promise<[string]>

    'testMerkleHash(bytes)'(
      buf: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>
  }

  testMerkleHash(buf: BytesLike, overrides?: CallOverrides): Promise<string>

  'testMerkleHash(bytes)'(
    buf: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>

  callStatic: {
    testMerkleHash(buf: BytesLike, overrides?: CallOverrides): Promise<string>

    'testMerkleHash(bytes)'(
      buf: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>
  }

  filters: {}

  estimateGas: {
    testMerkleHash(
      buf: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'testMerkleHash(bytes)'(
      buf: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>
  }

  populateTransaction: {
    testMerkleHash(
      buf: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'testMerkleHash(bytes)'(
      buf: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>
  }
}