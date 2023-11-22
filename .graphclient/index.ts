// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { TasksManagerTypes } from './sources/TasksManager/types';
import * as importedModule$0 from "./sources/TasksManager/introspectionSchema";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
  Int8: any;
};

export type Approval = {
  id: Scalars['Bytes'];
  owner: Scalars['Bytes'];
  approved: Scalars['Bytes'];
  tokenId: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type ApprovalForAll = {
  id: Scalars['Bytes'];
  owner: Scalars['Bytes'];
  operator: Scalars['Bytes'];
  approved: Scalars['Boolean'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type ApprovalForAll_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_gt?: InputMaybe<Scalars['Bytes']>;
  owner_lt?: InputMaybe<Scalars['Bytes']>;
  owner_gte?: InputMaybe<Scalars['Bytes']>;
  owner_lte?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  operator?: InputMaybe<Scalars['Bytes']>;
  operator_not?: InputMaybe<Scalars['Bytes']>;
  operator_gt?: InputMaybe<Scalars['Bytes']>;
  operator_lt?: InputMaybe<Scalars['Bytes']>;
  operator_gte?: InputMaybe<Scalars['Bytes']>;
  operator_lte?: InputMaybe<Scalars['Bytes']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']>;
  approved?: InputMaybe<Scalars['Boolean']>;
  approved_not?: InputMaybe<Scalars['Boolean']>;
  approved_in?: InputMaybe<Array<Scalars['Boolean']>>;
  approved_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ApprovalForAll_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ApprovalForAll_filter>>>;
};

export type ApprovalForAll_orderBy =
  | 'id'
  | 'owner'
  | 'operator'
  | 'approved'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Approval_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_gt?: InputMaybe<Scalars['Bytes']>;
  owner_lt?: InputMaybe<Scalars['Bytes']>;
  owner_gte?: InputMaybe<Scalars['Bytes']>;
  owner_lte?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  approved?: InputMaybe<Scalars['Bytes']>;
  approved_not?: InputMaybe<Scalars['Bytes']>;
  approved_gt?: InputMaybe<Scalars['Bytes']>;
  approved_lt?: InputMaybe<Scalars['Bytes']>;
  approved_gte?: InputMaybe<Scalars['Bytes']>;
  approved_lte?: InputMaybe<Scalars['Bytes']>;
  approved_in?: InputMaybe<Array<Scalars['Bytes']>>;
  approved_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  approved_contains?: InputMaybe<Scalars['Bytes']>;
  approved_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Approval_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Approval_filter>>>;
};

export type Approval_orderBy =
  | 'id'
  | 'owner'
  | 'approved'
  | 'tokenId'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type AuthorizeOperator = {
  id: Scalars['Bytes'];
  interfaceId: Scalars['Bytes'];
  roleId: Scalars['BigInt'];
  isAuthorized: Scalars['Boolean'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type AuthorizeOperator_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  interfaceId?: InputMaybe<Scalars['Bytes']>;
  interfaceId_not?: InputMaybe<Scalars['Bytes']>;
  interfaceId_gt?: InputMaybe<Scalars['Bytes']>;
  interfaceId_lt?: InputMaybe<Scalars['Bytes']>;
  interfaceId_gte?: InputMaybe<Scalars['Bytes']>;
  interfaceId_lte?: InputMaybe<Scalars['Bytes']>;
  interfaceId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  interfaceId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  interfaceId_contains?: InputMaybe<Scalars['Bytes']>;
  interfaceId_not_contains?: InputMaybe<Scalars['Bytes']>;
  roleId?: InputMaybe<Scalars['BigInt']>;
  roleId_not?: InputMaybe<Scalars['BigInt']>;
  roleId_gt?: InputMaybe<Scalars['BigInt']>;
  roleId_lt?: InputMaybe<Scalars['BigInt']>;
  roleId_gte?: InputMaybe<Scalars['BigInt']>;
  roleId_lte?: InputMaybe<Scalars['BigInt']>;
  roleId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  roleId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  isAuthorized?: InputMaybe<Scalars['Boolean']>;
  isAuthorized_not?: InputMaybe<Scalars['Boolean']>;
  isAuthorized_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isAuthorized_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AuthorizeOperator_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AuthorizeOperator_filter>>>;
};

export type AuthorizeOperator_orderBy =
  | 'id'
  | 'interfaceId'
  | 'roleId'
  | 'isAuthorized'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type AuthorizePersonnel = {
  id: Scalars['Bytes'];
  roleId: Scalars['BigInt'];
  authorizedAddress: Scalars['Bytes'];
  isAuthorized: Scalars['Boolean'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type AuthorizePersonnel_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  roleId?: InputMaybe<Scalars['BigInt']>;
  roleId_not?: InputMaybe<Scalars['BigInt']>;
  roleId_gt?: InputMaybe<Scalars['BigInt']>;
  roleId_lt?: InputMaybe<Scalars['BigInt']>;
  roleId_gte?: InputMaybe<Scalars['BigInt']>;
  roleId_lte?: InputMaybe<Scalars['BigInt']>;
  roleId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  roleId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  authorizedAddress?: InputMaybe<Scalars['Bytes']>;
  authorizedAddress_not?: InputMaybe<Scalars['Bytes']>;
  authorizedAddress_gt?: InputMaybe<Scalars['Bytes']>;
  authorizedAddress_lt?: InputMaybe<Scalars['Bytes']>;
  authorizedAddress_gte?: InputMaybe<Scalars['Bytes']>;
  authorizedAddress_lte?: InputMaybe<Scalars['Bytes']>;
  authorizedAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  authorizedAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  authorizedAddress_contains?: InputMaybe<Scalars['Bytes']>;
  authorizedAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  isAuthorized?: InputMaybe<Scalars['Boolean']>;
  isAuthorized_not?: InputMaybe<Scalars['Boolean']>;
  isAuthorized_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isAuthorized_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AuthorizePersonnel_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AuthorizePersonnel_filter>>>;
};

export type AuthorizePersonnel_orderBy =
  | 'id'
  | 'roleId'
  | 'authorizedAddress'
  | 'isAuthorized'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Deposit = {
  id: Scalars['Bytes'];
  authorizationId: Scalars['BigInt'];
  depositor: Scalars['Bytes'];
  amount: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type Deposit_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  authorizationId?: InputMaybe<Scalars['BigInt']>;
  authorizationId_not?: InputMaybe<Scalars['BigInt']>;
  authorizationId_gt?: InputMaybe<Scalars['BigInt']>;
  authorizationId_lt?: InputMaybe<Scalars['BigInt']>;
  authorizationId_gte?: InputMaybe<Scalars['BigInt']>;
  authorizationId_lte?: InputMaybe<Scalars['BigInt']>;
  authorizationId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  authorizationId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositor?: InputMaybe<Scalars['Bytes']>;
  depositor_not?: InputMaybe<Scalars['Bytes']>;
  depositor_gt?: InputMaybe<Scalars['Bytes']>;
  depositor_lt?: InputMaybe<Scalars['Bytes']>;
  depositor_gte?: InputMaybe<Scalars['Bytes']>;
  depositor_lte?: InputMaybe<Scalars['Bytes']>;
  depositor_in?: InputMaybe<Array<Scalars['Bytes']>>;
  depositor_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  depositor_contains?: InputMaybe<Scalars['Bytes']>;
  depositor_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Deposit_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Deposit_filter>>>;
};

export type Deposit_orderBy =
  | 'id'
  | 'authorizationId'
  | 'depositor'
  | 'amount'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type DescriptionUpdated = {
  id: Scalars['Bytes'];
  taskId: Scalars['BigInt'];
  description: Scalars['String'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type DescriptionUpdated_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  taskId?: InputMaybe<Scalars['BigInt']>;
  taskId_not?: InputMaybe<Scalars['BigInt']>;
  taskId_gt?: InputMaybe<Scalars['BigInt']>;
  taskId_lt?: InputMaybe<Scalars['BigInt']>;
  taskId_gte?: InputMaybe<Scalars['BigInt']>;
  taskId_lte?: InputMaybe<Scalars['BigInt']>;
  taskId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  taskId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  description?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DescriptionUpdated_filter>>>;
  or?: InputMaybe<Array<InputMaybe<DescriptionUpdated_filter>>>;
};

export type DescriptionUpdated_orderBy =
  | 'id'
  | 'taskId'
  | 'description'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type EndDateUpdated = {
  id: Scalars['Bytes'];
  taskId: Scalars['BigInt'];
  endDate: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type EndDateUpdated_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  taskId?: InputMaybe<Scalars['BigInt']>;
  taskId_not?: InputMaybe<Scalars['BigInt']>;
  taskId_gt?: InputMaybe<Scalars['BigInt']>;
  taskId_lt?: InputMaybe<Scalars['BigInt']>;
  taskId_gte?: InputMaybe<Scalars['BigInt']>;
  taskId_lte?: InputMaybe<Scalars['BigInt']>;
  taskId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  taskId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endDate?: InputMaybe<Scalars['BigInt']>;
  endDate_not?: InputMaybe<Scalars['BigInt']>;
  endDate_gt?: InputMaybe<Scalars['BigInt']>;
  endDate_lt?: InputMaybe<Scalars['BigInt']>;
  endDate_gte?: InputMaybe<Scalars['BigInt']>;
  endDate_lte?: InputMaybe<Scalars['BigInt']>;
  endDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EndDateUpdated_filter>>>;
  or?: InputMaybe<Array<InputMaybe<EndDateUpdated_filter>>>;
};

export type EndDateUpdated_orderBy =
  | 'id'
  | 'taskId'
  | 'endDate'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type MetadataUpdated = {
  id: Scalars['Bytes'];
  taskId: Scalars['BigInt'];
  metadata: Scalars['String'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type MetadataUpdated_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  taskId?: InputMaybe<Scalars['BigInt']>;
  taskId_not?: InputMaybe<Scalars['BigInt']>;
  taskId_gt?: InputMaybe<Scalars['BigInt']>;
  taskId_lt?: InputMaybe<Scalars['BigInt']>;
  taskId_gte?: InputMaybe<Scalars['BigInt']>;
  taskId_lte?: InputMaybe<Scalars['BigInt']>;
  taskId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  taskId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  metadata?: InputMaybe<Scalars['String']>;
  metadata_not?: InputMaybe<Scalars['String']>;
  metadata_gt?: InputMaybe<Scalars['String']>;
  metadata_lt?: InputMaybe<Scalars['String']>;
  metadata_gte?: InputMaybe<Scalars['String']>;
  metadata_lte?: InputMaybe<Scalars['String']>;
  metadata_in?: InputMaybe<Array<Scalars['String']>>;
  metadata_not_in?: InputMaybe<Array<Scalars['String']>>;
  metadata_contains?: InputMaybe<Scalars['String']>;
  metadata_contains_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_contains?: InputMaybe<Scalars['String']>;
  metadata_not_contains_nocase?: InputMaybe<Scalars['String']>;
  metadata_starts_with?: InputMaybe<Scalars['String']>;
  metadata_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_starts_with?: InputMaybe<Scalars['String']>;
  metadata_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_ends_with?: InputMaybe<Scalars['String']>;
  metadata_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_ends_with?: InputMaybe<Scalars['String']>;
  metadata_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MetadataUpdated_filter>>>;
  or?: InputMaybe<Array<InputMaybe<MetadataUpdated_filter>>>;
};

export type MetadataUpdated_orderBy =
  | 'id'
  | 'taskId'
  | 'metadata'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  approval?: Maybe<Approval>;
  approvals: Array<Approval>;
  approvalForAll?: Maybe<ApprovalForAll>;
  approvalForAlls: Array<ApprovalForAll>;
  authorizeOperator?: Maybe<AuthorizeOperator>;
  authorizeOperators: Array<AuthorizeOperator>;
  authorizePersonnel?: Maybe<AuthorizePersonnel>;
  authorizePersonnels: Array<AuthorizePersonnel>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  descriptionUpdated?: Maybe<DescriptionUpdated>;
  descriptionUpdateds: Array<DescriptionUpdated>;
  endDateUpdated?: Maybe<EndDateUpdated>;
  endDateUpdateds: Array<EndDateUpdated>;
  metadataUpdated?: Maybe<MetadataUpdated>;
  metadataUpdateds: Array<MetadataUpdated>;
  quorumUpdated?: Maybe<QuorumUpdated>;
  quorumUpdateds: Array<QuorumUpdated>;
  taskCreated?: Maybe<TaskCreated>;
  taskCreateds: Array<TaskCreated>;
  taskReviewed?: Maybe<TaskReviewed>;
  taskRevieweds: Array<TaskReviewed>;
  taskStarted?: Maybe<TaskStarted>;
  taskStarteds: Array<TaskStarted>;
  taskUpdated?: Maybe<TaskUpdated>;
  taskUpdateds: Array<TaskUpdated>;
  titleUpdated?: Maybe<TitleUpdated>;
  titleUpdateds: Array<TitleUpdated>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  withdraw?: Maybe<Withdraw>;
  withdraws: Array<Withdraw>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryapprovalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryapprovalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Approval_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Approval_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryapprovalForAllArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryapprovalForAllsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApprovalForAll_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ApprovalForAll_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryauthorizeOperatorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryauthorizeOperatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuthorizeOperator_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AuthorizeOperator_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryauthorizePersonnelArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryauthorizePersonnelsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuthorizePersonnel_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AuthorizePersonnel_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydepositArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydescriptionUpdatedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydescriptionUpdatedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DescriptionUpdated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DescriptionUpdated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryendDateUpdatedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryendDateUpdatedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EndDateUpdated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<EndDateUpdated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymetadataUpdatedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymetadataUpdatedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MetadataUpdated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MetadataUpdated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryquorumUpdatedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryquorumUpdatedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<QuorumUpdated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<QuorumUpdated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytaskCreatedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytaskCreatedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TaskCreated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TaskCreated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytaskReviewedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytaskReviewedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TaskReviewed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TaskReviewed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytaskStartedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytaskStartedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TaskStarted_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TaskStarted_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytaskUpdatedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytaskUpdatedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TaskUpdated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TaskUpdated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytitleUpdatedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytitleUpdatedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TitleUpdated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TitleUpdated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywithdrawArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Withdraw_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Withdraw_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type QuorumUpdated = {
  id: Scalars['Bytes'];
  value: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type QuorumUpdated_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  value?: InputMaybe<Scalars['BigInt']>;
  value_not?: InputMaybe<Scalars['BigInt']>;
  value_gt?: InputMaybe<Scalars['BigInt']>;
  value_lt?: InputMaybe<Scalars['BigInt']>;
  value_gte?: InputMaybe<Scalars['BigInt']>;
  value_lte?: InputMaybe<Scalars['BigInt']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']>>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<QuorumUpdated_filter>>>;
  or?: InputMaybe<Array<InputMaybe<QuorumUpdated_filter>>>;
};

export type QuorumUpdated_orderBy =
  | 'id'
  | 'value'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Subscription = {
  approval?: Maybe<Approval>;
  approvals: Array<Approval>;
  approvalForAll?: Maybe<ApprovalForAll>;
  approvalForAlls: Array<ApprovalForAll>;
  authorizeOperator?: Maybe<AuthorizeOperator>;
  authorizeOperators: Array<AuthorizeOperator>;
  authorizePersonnel?: Maybe<AuthorizePersonnel>;
  authorizePersonnels: Array<AuthorizePersonnel>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  descriptionUpdated?: Maybe<DescriptionUpdated>;
  descriptionUpdateds: Array<DescriptionUpdated>;
  endDateUpdated?: Maybe<EndDateUpdated>;
  endDateUpdateds: Array<EndDateUpdated>;
  metadataUpdated?: Maybe<MetadataUpdated>;
  metadataUpdateds: Array<MetadataUpdated>;
  quorumUpdated?: Maybe<QuorumUpdated>;
  quorumUpdateds: Array<QuorumUpdated>;
  taskCreated?: Maybe<TaskCreated>;
  taskCreateds: Array<TaskCreated>;
  taskReviewed?: Maybe<TaskReviewed>;
  taskRevieweds: Array<TaskReviewed>;
  taskStarted?: Maybe<TaskStarted>;
  taskStarteds: Array<TaskStarted>;
  taskUpdated?: Maybe<TaskUpdated>;
  taskUpdateds: Array<TaskUpdated>;
  titleUpdated?: Maybe<TitleUpdated>;
  titleUpdateds: Array<TitleUpdated>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  withdraw?: Maybe<Withdraw>;
  withdraws: Array<Withdraw>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionapprovalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionapprovalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Approval_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Approval_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionapprovalForAllArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionapprovalForAllsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApprovalForAll_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ApprovalForAll_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionauthorizeOperatorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionauthorizeOperatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuthorizeOperator_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AuthorizeOperator_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionauthorizePersonnelArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionauthorizePersonnelsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuthorizePersonnel_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AuthorizePersonnel_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondepositArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondescriptionUpdatedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondescriptionUpdatedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DescriptionUpdated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DescriptionUpdated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionendDateUpdatedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionendDateUpdatedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EndDateUpdated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<EndDateUpdated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmetadataUpdatedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmetadataUpdatedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MetadataUpdated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MetadataUpdated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionquorumUpdatedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionquorumUpdatedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<QuorumUpdated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<QuorumUpdated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontaskCreatedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontaskCreatedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TaskCreated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TaskCreated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontaskReviewedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontaskReviewedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TaskReviewed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TaskReviewed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontaskStartedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontaskStartedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TaskStarted_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TaskStarted_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontaskUpdatedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontaskUpdatedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TaskUpdated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TaskUpdated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontitleUpdatedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontitleUpdatedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TitleUpdated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TitleUpdated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwithdrawArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Withdraw_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Withdraw_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type TaskCreated = {
  id: Scalars['Bytes'];
  taskId: Scalars['BigInt'];
  creator: Scalars['Bytes'];
  assignee: Scalars['Bytes'];
  reward: Scalars['BigInt'];
  endDate: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type TaskCreated_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  taskId?: InputMaybe<Scalars['BigInt']>;
  taskId_not?: InputMaybe<Scalars['BigInt']>;
  taskId_gt?: InputMaybe<Scalars['BigInt']>;
  taskId_lt?: InputMaybe<Scalars['BigInt']>;
  taskId_gte?: InputMaybe<Scalars['BigInt']>;
  taskId_lte?: InputMaybe<Scalars['BigInt']>;
  taskId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  taskId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  creator?: InputMaybe<Scalars['Bytes']>;
  creator_not?: InputMaybe<Scalars['Bytes']>;
  creator_gt?: InputMaybe<Scalars['Bytes']>;
  creator_lt?: InputMaybe<Scalars['Bytes']>;
  creator_gte?: InputMaybe<Scalars['Bytes']>;
  creator_lte?: InputMaybe<Scalars['Bytes']>;
  creator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  creator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  creator_contains?: InputMaybe<Scalars['Bytes']>;
  creator_not_contains?: InputMaybe<Scalars['Bytes']>;
  assignee?: InputMaybe<Scalars['Bytes']>;
  assignee_not?: InputMaybe<Scalars['Bytes']>;
  assignee_gt?: InputMaybe<Scalars['Bytes']>;
  assignee_lt?: InputMaybe<Scalars['Bytes']>;
  assignee_gte?: InputMaybe<Scalars['Bytes']>;
  assignee_lte?: InputMaybe<Scalars['Bytes']>;
  assignee_in?: InputMaybe<Array<Scalars['Bytes']>>;
  assignee_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  assignee_contains?: InputMaybe<Scalars['Bytes']>;
  assignee_not_contains?: InputMaybe<Scalars['Bytes']>;
  reward?: InputMaybe<Scalars['BigInt']>;
  reward_not?: InputMaybe<Scalars['BigInt']>;
  reward_gt?: InputMaybe<Scalars['BigInt']>;
  reward_lt?: InputMaybe<Scalars['BigInt']>;
  reward_gte?: InputMaybe<Scalars['BigInt']>;
  reward_lte?: InputMaybe<Scalars['BigInt']>;
  reward_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reward_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endDate?: InputMaybe<Scalars['BigInt']>;
  endDate_not?: InputMaybe<Scalars['BigInt']>;
  endDate_gt?: InputMaybe<Scalars['BigInt']>;
  endDate_lt?: InputMaybe<Scalars['BigInt']>;
  endDate_gte?: InputMaybe<Scalars['BigInt']>;
  endDate_lte?: InputMaybe<Scalars['BigInt']>;
  endDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TaskCreated_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TaskCreated_filter>>>;
};

export type TaskCreated_orderBy =
  | 'id'
  | 'taskId'
  | 'creator'
  | 'assignee'
  | 'reward'
  | 'endDate'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type TaskReviewed = {
  id: Scalars['Bytes'];
  taskId: Scalars['BigInt'];
  reviewer: Scalars['Bytes'];
  metadata: Scalars['String'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type TaskReviewed_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  taskId?: InputMaybe<Scalars['BigInt']>;
  taskId_not?: InputMaybe<Scalars['BigInt']>;
  taskId_gt?: InputMaybe<Scalars['BigInt']>;
  taskId_lt?: InputMaybe<Scalars['BigInt']>;
  taskId_gte?: InputMaybe<Scalars['BigInt']>;
  taskId_lte?: InputMaybe<Scalars['BigInt']>;
  taskId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  taskId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reviewer?: InputMaybe<Scalars['Bytes']>;
  reviewer_not?: InputMaybe<Scalars['Bytes']>;
  reviewer_gt?: InputMaybe<Scalars['Bytes']>;
  reviewer_lt?: InputMaybe<Scalars['Bytes']>;
  reviewer_gte?: InputMaybe<Scalars['Bytes']>;
  reviewer_lte?: InputMaybe<Scalars['Bytes']>;
  reviewer_in?: InputMaybe<Array<Scalars['Bytes']>>;
  reviewer_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  reviewer_contains?: InputMaybe<Scalars['Bytes']>;
  reviewer_not_contains?: InputMaybe<Scalars['Bytes']>;
  metadata?: InputMaybe<Scalars['String']>;
  metadata_not?: InputMaybe<Scalars['String']>;
  metadata_gt?: InputMaybe<Scalars['String']>;
  metadata_lt?: InputMaybe<Scalars['String']>;
  metadata_gte?: InputMaybe<Scalars['String']>;
  metadata_lte?: InputMaybe<Scalars['String']>;
  metadata_in?: InputMaybe<Array<Scalars['String']>>;
  metadata_not_in?: InputMaybe<Array<Scalars['String']>>;
  metadata_contains?: InputMaybe<Scalars['String']>;
  metadata_contains_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_contains?: InputMaybe<Scalars['String']>;
  metadata_not_contains_nocase?: InputMaybe<Scalars['String']>;
  metadata_starts_with?: InputMaybe<Scalars['String']>;
  metadata_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_starts_with?: InputMaybe<Scalars['String']>;
  metadata_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_ends_with?: InputMaybe<Scalars['String']>;
  metadata_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_ends_with?: InputMaybe<Scalars['String']>;
  metadata_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TaskReviewed_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TaskReviewed_filter>>>;
};

export type TaskReviewed_orderBy =
  | 'id'
  | 'taskId'
  | 'reviewer'
  | 'metadata'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type TaskStarted = {
  id: Scalars['Bytes'];
  taskId: Scalars['BigInt'];
  assignee: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type TaskStarted_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  taskId?: InputMaybe<Scalars['BigInt']>;
  taskId_not?: InputMaybe<Scalars['BigInt']>;
  taskId_gt?: InputMaybe<Scalars['BigInt']>;
  taskId_lt?: InputMaybe<Scalars['BigInt']>;
  taskId_gte?: InputMaybe<Scalars['BigInt']>;
  taskId_lte?: InputMaybe<Scalars['BigInt']>;
  taskId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  taskId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  assignee?: InputMaybe<Scalars['Bytes']>;
  assignee_not?: InputMaybe<Scalars['Bytes']>;
  assignee_gt?: InputMaybe<Scalars['Bytes']>;
  assignee_lt?: InputMaybe<Scalars['Bytes']>;
  assignee_gte?: InputMaybe<Scalars['Bytes']>;
  assignee_lte?: InputMaybe<Scalars['Bytes']>;
  assignee_in?: InputMaybe<Array<Scalars['Bytes']>>;
  assignee_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  assignee_contains?: InputMaybe<Scalars['Bytes']>;
  assignee_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TaskStarted_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TaskStarted_filter>>>;
};

export type TaskStarted_orderBy =
  | 'id'
  | 'taskId'
  | 'assignee'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type TaskUpdated = {
  id: Scalars['Bytes'];
  taskId: Scalars['BigInt'];
  status: Scalars['Int'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type TaskUpdated_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  taskId?: InputMaybe<Scalars['BigInt']>;
  taskId_not?: InputMaybe<Scalars['BigInt']>;
  taskId_gt?: InputMaybe<Scalars['BigInt']>;
  taskId_lt?: InputMaybe<Scalars['BigInt']>;
  taskId_gte?: InputMaybe<Scalars['BigInt']>;
  taskId_lte?: InputMaybe<Scalars['BigInt']>;
  taskId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  taskId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<Scalars['Int']>;
  status_not?: InputMaybe<Scalars['Int']>;
  status_gt?: InputMaybe<Scalars['Int']>;
  status_lt?: InputMaybe<Scalars['Int']>;
  status_gte?: InputMaybe<Scalars['Int']>;
  status_lte?: InputMaybe<Scalars['Int']>;
  status_in?: InputMaybe<Array<Scalars['Int']>>;
  status_not_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TaskUpdated_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TaskUpdated_filter>>>;
};

export type TaskUpdated_orderBy =
  | 'id'
  | 'taskId'
  | 'status'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type TitleUpdated = {
  id: Scalars['Bytes'];
  taskId: Scalars['BigInt'];
  title: Scalars['String'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type TitleUpdated_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  taskId?: InputMaybe<Scalars['BigInt']>;
  taskId_not?: InputMaybe<Scalars['BigInt']>;
  taskId_gt?: InputMaybe<Scalars['BigInt']>;
  taskId_lt?: InputMaybe<Scalars['BigInt']>;
  taskId_gte?: InputMaybe<Scalars['BigInt']>;
  taskId_lte?: InputMaybe<Scalars['BigInt']>;
  taskId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  taskId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  title?: InputMaybe<Scalars['String']>;
  title_not?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_contains_nocase?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TitleUpdated_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TitleUpdated_filter>>>;
};

export type TitleUpdated_orderBy =
  | 'id'
  | 'taskId'
  | 'title'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Transfer = {
  id: Scalars['Bytes'];
  from: Scalars['Bytes'];
  to: Scalars['Bytes'];
  tokenId: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type Transfer_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  from?: InputMaybe<Scalars['Bytes']>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_gt?: InputMaybe<Scalars['Bytes']>;
  from_lt?: InputMaybe<Scalars['Bytes']>;
  from_gte?: InputMaybe<Scalars['Bytes']>;
  from_lte?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_gt?: InputMaybe<Scalars['Bytes']>;
  to_lt?: InputMaybe<Scalars['Bytes']>;
  to_gte?: InputMaybe<Scalars['Bytes']>;
  to_lte?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Transfer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Transfer_filter>>>;
};

export type Transfer_orderBy =
  | 'id'
  | 'from'
  | 'to'
  | 'tokenId'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Withdraw = {
  id: Scalars['Bytes'];
  authorizationId: Scalars['BigInt'];
  withdrawer: Scalars['Bytes'];
  amount: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type Withdraw_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  authorizationId?: InputMaybe<Scalars['BigInt']>;
  authorizationId_not?: InputMaybe<Scalars['BigInt']>;
  authorizationId_gt?: InputMaybe<Scalars['BigInt']>;
  authorizationId_lt?: InputMaybe<Scalars['BigInt']>;
  authorizationId_gte?: InputMaybe<Scalars['BigInt']>;
  authorizationId_lte?: InputMaybe<Scalars['BigInt']>;
  authorizationId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  authorizationId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawer?: InputMaybe<Scalars['Bytes']>;
  withdrawer_not?: InputMaybe<Scalars['Bytes']>;
  withdrawer_gt?: InputMaybe<Scalars['Bytes']>;
  withdrawer_lt?: InputMaybe<Scalars['Bytes']>;
  withdrawer_gte?: InputMaybe<Scalars['Bytes']>;
  withdrawer_lte?: InputMaybe<Scalars['Bytes']>;
  withdrawer_in?: InputMaybe<Array<Scalars['Bytes']>>;
  withdrawer_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  withdrawer_contains?: InputMaybe<Scalars['Bytes']>;
  withdrawer_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Withdraw_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Withdraw_filter>>>;
};

export type Withdraw_orderBy =
  | 'id'
  | 'authorizationId'
  | 'withdrawer'
  | 'amount'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Approval: ResolverTypeWrapper<Approval>;
  ApprovalForAll: ResolverTypeWrapper<ApprovalForAll>;
  ApprovalForAll_filter: ApprovalForAll_filter;
  ApprovalForAll_orderBy: ApprovalForAll_orderBy;
  Approval_filter: Approval_filter;
  Approval_orderBy: Approval_orderBy;
  AuthorizeOperator: ResolverTypeWrapper<AuthorizeOperator>;
  AuthorizeOperator_filter: AuthorizeOperator_filter;
  AuthorizeOperator_orderBy: AuthorizeOperator_orderBy;
  AuthorizePersonnel: ResolverTypeWrapper<AuthorizePersonnel>;
  AuthorizePersonnel_filter: AuthorizePersonnel_filter;
  AuthorizePersonnel_orderBy: AuthorizePersonnel_orderBy;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  Deposit: ResolverTypeWrapper<Deposit>;
  Deposit_filter: Deposit_filter;
  Deposit_orderBy: Deposit_orderBy;
  DescriptionUpdated: ResolverTypeWrapper<DescriptionUpdated>;
  DescriptionUpdated_filter: DescriptionUpdated_filter;
  DescriptionUpdated_orderBy: DescriptionUpdated_orderBy;
  EndDateUpdated: ResolverTypeWrapper<EndDateUpdated>;
  EndDateUpdated_filter: EndDateUpdated_filter;
  EndDateUpdated_orderBy: EndDateUpdated_orderBy;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Int8: ResolverTypeWrapper<Scalars['Int8']>;
  MetadataUpdated: ResolverTypeWrapper<MetadataUpdated>;
  MetadataUpdated_filter: MetadataUpdated_filter;
  MetadataUpdated_orderBy: MetadataUpdated_orderBy;
  OrderDirection: OrderDirection;
  Query: ResolverTypeWrapper<{}>;
  QuorumUpdated: ResolverTypeWrapper<QuorumUpdated>;
  QuorumUpdated_filter: QuorumUpdated_filter;
  QuorumUpdated_orderBy: QuorumUpdated_orderBy;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  TaskCreated: ResolverTypeWrapper<TaskCreated>;
  TaskCreated_filter: TaskCreated_filter;
  TaskCreated_orderBy: TaskCreated_orderBy;
  TaskReviewed: ResolverTypeWrapper<TaskReviewed>;
  TaskReviewed_filter: TaskReviewed_filter;
  TaskReviewed_orderBy: TaskReviewed_orderBy;
  TaskStarted: ResolverTypeWrapper<TaskStarted>;
  TaskStarted_filter: TaskStarted_filter;
  TaskStarted_orderBy: TaskStarted_orderBy;
  TaskUpdated: ResolverTypeWrapper<TaskUpdated>;
  TaskUpdated_filter: TaskUpdated_filter;
  TaskUpdated_orderBy: TaskUpdated_orderBy;
  TitleUpdated: ResolverTypeWrapper<TitleUpdated>;
  TitleUpdated_filter: TitleUpdated_filter;
  TitleUpdated_orderBy: TitleUpdated_orderBy;
  Transfer: ResolverTypeWrapper<Transfer>;
  Transfer_filter: Transfer_filter;
  Transfer_orderBy: Transfer_orderBy;
  Withdraw: ResolverTypeWrapper<Withdraw>;
  Withdraw_filter: Withdraw_filter;
  Withdraw_orderBy: Withdraw_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Approval: Approval;
  ApprovalForAll: ApprovalForAll;
  ApprovalForAll_filter: ApprovalForAll_filter;
  Approval_filter: Approval_filter;
  AuthorizeOperator: AuthorizeOperator;
  AuthorizeOperator_filter: AuthorizeOperator_filter;
  AuthorizePersonnel: AuthorizePersonnel;
  AuthorizePersonnel_filter: AuthorizePersonnel_filter;
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean'];
  Bytes: Scalars['Bytes'];
  Deposit: Deposit;
  Deposit_filter: Deposit_filter;
  DescriptionUpdated: DescriptionUpdated;
  DescriptionUpdated_filter: DescriptionUpdated_filter;
  EndDateUpdated: EndDateUpdated;
  EndDateUpdated_filter: EndDateUpdated_filter;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Int8: Scalars['Int8'];
  MetadataUpdated: MetadataUpdated;
  MetadataUpdated_filter: MetadataUpdated_filter;
  Query: {};
  QuorumUpdated: QuorumUpdated;
  QuorumUpdated_filter: QuorumUpdated_filter;
  String: Scalars['String'];
  Subscription: {};
  TaskCreated: TaskCreated;
  TaskCreated_filter: TaskCreated_filter;
  TaskReviewed: TaskReviewed;
  TaskReviewed_filter: TaskReviewed_filter;
  TaskStarted: TaskStarted;
  TaskStarted_filter: TaskStarted_filter;
  TaskUpdated: TaskUpdated;
  TaskUpdated_filter: TaskUpdated_filter;
  TitleUpdated: TitleUpdated;
  TitleUpdated_filter: TitleUpdated_filter;
  Transfer: Transfer;
  Transfer_filter: Transfer_filter;
  Withdraw: Withdraw;
  Withdraw_filter: Withdraw_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ApprovalResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Approval'] = ResolversParentTypes['Approval']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  approved?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApprovalForAllResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApprovalForAll'] = ResolversParentTypes['ApprovalForAll']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  operator?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  approved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AuthorizeOperatorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AuthorizeOperator'] = ResolversParentTypes['AuthorizeOperator']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  interfaceId?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  roleId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  isAuthorized?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AuthorizePersonnelResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AuthorizePersonnel'] = ResolversParentTypes['AuthorizePersonnel']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  roleId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  authorizedAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  isAuthorized?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type DepositResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Deposit'] = ResolversParentTypes['Deposit']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  authorizationId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  depositor?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DescriptionUpdatedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DescriptionUpdated'] = ResolversParentTypes['DescriptionUpdated']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  taskId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EndDateUpdatedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EndDateUpdated'] = ResolversParentTypes['EndDateUpdated']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  taskId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  endDate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
  name: 'Int8';
}

export type MetadataUpdatedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MetadataUpdated'] = ResolversParentTypes['MetadataUpdated']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  taskId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  approval?: Resolver<Maybe<ResolversTypes['Approval']>, ParentType, ContextType, RequireFields<QueryapprovalArgs, 'id' | 'subgraphError'>>;
  approvals?: Resolver<Array<ResolversTypes['Approval']>, ParentType, ContextType, RequireFields<QueryapprovalsArgs, 'skip' | 'first' | 'subgraphError'>>;
  approvalForAll?: Resolver<Maybe<ResolversTypes['ApprovalForAll']>, ParentType, ContextType, RequireFields<QueryapprovalForAllArgs, 'id' | 'subgraphError'>>;
  approvalForAlls?: Resolver<Array<ResolversTypes['ApprovalForAll']>, ParentType, ContextType, RequireFields<QueryapprovalForAllsArgs, 'skip' | 'first' | 'subgraphError'>>;
  authorizeOperator?: Resolver<Maybe<ResolversTypes['AuthorizeOperator']>, ParentType, ContextType, RequireFields<QueryauthorizeOperatorArgs, 'id' | 'subgraphError'>>;
  authorizeOperators?: Resolver<Array<ResolversTypes['AuthorizeOperator']>, ParentType, ContextType, RequireFields<QueryauthorizeOperatorsArgs, 'skip' | 'first' | 'subgraphError'>>;
  authorizePersonnel?: Resolver<Maybe<ResolversTypes['AuthorizePersonnel']>, ParentType, ContextType, RequireFields<QueryauthorizePersonnelArgs, 'id' | 'subgraphError'>>;
  authorizePersonnels?: Resolver<Array<ResolversTypes['AuthorizePersonnel']>, ParentType, ContextType, RequireFields<QueryauthorizePersonnelsArgs, 'skip' | 'first' | 'subgraphError'>>;
  deposit?: Resolver<Maybe<ResolversTypes['Deposit']>, ParentType, ContextType, RequireFields<QuerydepositArgs, 'id' | 'subgraphError'>>;
  deposits?: Resolver<Array<ResolversTypes['Deposit']>, ParentType, ContextType, RequireFields<QuerydepositsArgs, 'skip' | 'first' | 'subgraphError'>>;
  descriptionUpdated?: Resolver<Maybe<ResolversTypes['DescriptionUpdated']>, ParentType, ContextType, RequireFields<QuerydescriptionUpdatedArgs, 'id' | 'subgraphError'>>;
  descriptionUpdateds?: Resolver<Array<ResolversTypes['DescriptionUpdated']>, ParentType, ContextType, RequireFields<QuerydescriptionUpdatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  endDateUpdated?: Resolver<Maybe<ResolversTypes['EndDateUpdated']>, ParentType, ContextType, RequireFields<QueryendDateUpdatedArgs, 'id' | 'subgraphError'>>;
  endDateUpdateds?: Resolver<Array<ResolversTypes['EndDateUpdated']>, ParentType, ContextType, RequireFields<QueryendDateUpdatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  metadataUpdated?: Resolver<Maybe<ResolversTypes['MetadataUpdated']>, ParentType, ContextType, RequireFields<QuerymetadataUpdatedArgs, 'id' | 'subgraphError'>>;
  metadataUpdateds?: Resolver<Array<ResolversTypes['MetadataUpdated']>, ParentType, ContextType, RequireFields<QuerymetadataUpdatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  quorumUpdated?: Resolver<Maybe<ResolversTypes['QuorumUpdated']>, ParentType, ContextType, RequireFields<QueryquorumUpdatedArgs, 'id' | 'subgraphError'>>;
  quorumUpdateds?: Resolver<Array<ResolversTypes['QuorumUpdated']>, ParentType, ContextType, RequireFields<QueryquorumUpdatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  taskCreated?: Resolver<Maybe<ResolversTypes['TaskCreated']>, ParentType, ContextType, RequireFields<QuerytaskCreatedArgs, 'id' | 'subgraphError'>>;
  taskCreateds?: Resolver<Array<ResolversTypes['TaskCreated']>, ParentType, ContextType, RequireFields<QuerytaskCreatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  taskReviewed?: Resolver<Maybe<ResolversTypes['TaskReviewed']>, ParentType, ContextType, RequireFields<QuerytaskReviewedArgs, 'id' | 'subgraphError'>>;
  taskRevieweds?: Resolver<Array<ResolversTypes['TaskReviewed']>, ParentType, ContextType, RequireFields<QuerytaskReviewedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  taskStarted?: Resolver<Maybe<ResolversTypes['TaskStarted']>, ParentType, ContextType, RequireFields<QuerytaskStartedArgs, 'id' | 'subgraphError'>>;
  taskStarteds?: Resolver<Array<ResolversTypes['TaskStarted']>, ParentType, ContextType, RequireFields<QuerytaskStartedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  taskUpdated?: Resolver<Maybe<ResolversTypes['TaskUpdated']>, ParentType, ContextType, RequireFields<QuerytaskUpdatedArgs, 'id' | 'subgraphError'>>;
  taskUpdateds?: Resolver<Array<ResolversTypes['TaskUpdated']>, ParentType, ContextType, RequireFields<QuerytaskUpdatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  titleUpdated?: Resolver<Maybe<ResolversTypes['TitleUpdated']>, ParentType, ContextType, RequireFields<QuerytitleUpdatedArgs, 'id' | 'subgraphError'>>;
  titleUpdateds?: Resolver<Array<ResolversTypes['TitleUpdated']>, ParentType, ContextType, RequireFields<QuerytitleUpdatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  transfer?: Resolver<Maybe<ResolversTypes['Transfer']>, ParentType, ContextType, RequireFields<QuerytransferArgs, 'id' | 'subgraphError'>>;
  transfers?: Resolver<Array<ResolversTypes['Transfer']>, ParentType, ContextType, RequireFields<QuerytransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  withdraw?: Resolver<Maybe<ResolversTypes['Withdraw']>, ParentType, ContextType, RequireFields<QuerywithdrawArgs, 'id' | 'subgraphError'>>;
  withdraws?: Resolver<Array<ResolversTypes['Withdraw']>, ParentType, ContextType, RequireFields<QuerywithdrawsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type QuorumUpdatedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuorumUpdated'] = ResolversParentTypes['QuorumUpdated']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  approval?: SubscriptionResolver<Maybe<ResolversTypes['Approval']>, "approval", ParentType, ContextType, RequireFields<SubscriptionapprovalArgs, 'id' | 'subgraphError'>>;
  approvals?: SubscriptionResolver<Array<ResolversTypes['Approval']>, "approvals", ParentType, ContextType, RequireFields<SubscriptionapprovalsArgs, 'skip' | 'first' | 'subgraphError'>>;
  approvalForAll?: SubscriptionResolver<Maybe<ResolversTypes['ApprovalForAll']>, "approvalForAll", ParentType, ContextType, RequireFields<SubscriptionapprovalForAllArgs, 'id' | 'subgraphError'>>;
  approvalForAlls?: SubscriptionResolver<Array<ResolversTypes['ApprovalForAll']>, "approvalForAlls", ParentType, ContextType, RequireFields<SubscriptionapprovalForAllsArgs, 'skip' | 'first' | 'subgraphError'>>;
  authorizeOperator?: SubscriptionResolver<Maybe<ResolversTypes['AuthorizeOperator']>, "authorizeOperator", ParentType, ContextType, RequireFields<SubscriptionauthorizeOperatorArgs, 'id' | 'subgraphError'>>;
  authorizeOperators?: SubscriptionResolver<Array<ResolversTypes['AuthorizeOperator']>, "authorizeOperators", ParentType, ContextType, RequireFields<SubscriptionauthorizeOperatorsArgs, 'skip' | 'first' | 'subgraphError'>>;
  authorizePersonnel?: SubscriptionResolver<Maybe<ResolversTypes['AuthorizePersonnel']>, "authorizePersonnel", ParentType, ContextType, RequireFields<SubscriptionauthorizePersonnelArgs, 'id' | 'subgraphError'>>;
  authorizePersonnels?: SubscriptionResolver<Array<ResolversTypes['AuthorizePersonnel']>, "authorizePersonnels", ParentType, ContextType, RequireFields<SubscriptionauthorizePersonnelsArgs, 'skip' | 'first' | 'subgraphError'>>;
  deposit?: SubscriptionResolver<Maybe<ResolversTypes['Deposit']>, "deposit", ParentType, ContextType, RequireFields<SubscriptiondepositArgs, 'id' | 'subgraphError'>>;
  deposits?: SubscriptionResolver<Array<ResolversTypes['Deposit']>, "deposits", ParentType, ContextType, RequireFields<SubscriptiondepositsArgs, 'skip' | 'first' | 'subgraphError'>>;
  descriptionUpdated?: SubscriptionResolver<Maybe<ResolversTypes['DescriptionUpdated']>, "descriptionUpdated", ParentType, ContextType, RequireFields<SubscriptiondescriptionUpdatedArgs, 'id' | 'subgraphError'>>;
  descriptionUpdateds?: SubscriptionResolver<Array<ResolversTypes['DescriptionUpdated']>, "descriptionUpdateds", ParentType, ContextType, RequireFields<SubscriptiondescriptionUpdatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  endDateUpdated?: SubscriptionResolver<Maybe<ResolversTypes['EndDateUpdated']>, "endDateUpdated", ParentType, ContextType, RequireFields<SubscriptionendDateUpdatedArgs, 'id' | 'subgraphError'>>;
  endDateUpdateds?: SubscriptionResolver<Array<ResolversTypes['EndDateUpdated']>, "endDateUpdateds", ParentType, ContextType, RequireFields<SubscriptionendDateUpdatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  metadataUpdated?: SubscriptionResolver<Maybe<ResolversTypes['MetadataUpdated']>, "metadataUpdated", ParentType, ContextType, RequireFields<SubscriptionmetadataUpdatedArgs, 'id' | 'subgraphError'>>;
  metadataUpdateds?: SubscriptionResolver<Array<ResolversTypes['MetadataUpdated']>, "metadataUpdateds", ParentType, ContextType, RequireFields<SubscriptionmetadataUpdatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  quorumUpdated?: SubscriptionResolver<Maybe<ResolversTypes['QuorumUpdated']>, "quorumUpdated", ParentType, ContextType, RequireFields<SubscriptionquorumUpdatedArgs, 'id' | 'subgraphError'>>;
  quorumUpdateds?: SubscriptionResolver<Array<ResolversTypes['QuorumUpdated']>, "quorumUpdateds", ParentType, ContextType, RequireFields<SubscriptionquorumUpdatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  taskCreated?: SubscriptionResolver<Maybe<ResolversTypes['TaskCreated']>, "taskCreated", ParentType, ContextType, RequireFields<SubscriptiontaskCreatedArgs, 'id' | 'subgraphError'>>;
  taskCreateds?: SubscriptionResolver<Array<ResolversTypes['TaskCreated']>, "taskCreateds", ParentType, ContextType, RequireFields<SubscriptiontaskCreatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  taskReviewed?: SubscriptionResolver<Maybe<ResolversTypes['TaskReviewed']>, "taskReviewed", ParentType, ContextType, RequireFields<SubscriptiontaskReviewedArgs, 'id' | 'subgraphError'>>;
  taskRevieweds?: SubscriptionResolver<Array<ResolversTypes['TaskReviewed']>, "taskRevieweds", ParentType, ContextType, RequireFields<SubscriptiontaskReviewedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  taskStarted?: SubscriptionResolver<Maybe<ResolversTypes['TaskStarted']>, "taskStarted", ParentType, ContextType, RequireFields<SubscriptiontaskStartedArgs, 'id' | 'subgraphError'>>;
  taskStarteds?: SubscriptionResolver<Array<ResolversTypes['TaskStarted']>, "taskStarteds", ParentType, ContextType, RequireFields<SubscriptiontaskStartedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  taskUpdated?: SubscriptionResolver<Maybe<ResolversTypes['TaskUpdated']>, "taskUpdated", ParentType, ContextType, RequireFields<SubscriptiontaskUpdatedArgs, 'id' | 'subgraphError'>>;
  taskUpdateds?: SubscriptionResolver<Array<ResolversTypes['TaskUpdated']>, "taskUpdateds", ParentType, ContextType, RequireFields<SubscriptiontaskUpdatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  titleUpdated?: SubscriptionResolver<Maybe<ResolversTypes['TitleUpdated']>, "titleUpdated", ParentType, ContextType, RequireFields<SubscriptiontitleUpdatedArgs, 'id' | 'subgraphError'>>;
  titleUpdateds?: SubscriptionResolver<Array<ResolversTypes['TitleUpdated']>, "titleUpdateds", ParentType, ContextType, RequireFields<SubscriptiontitleUpdatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  transfer?: SubscriptionResolver<Maybe<ResolversTypes['Transfer']>, "transfer", ParentType, ContextType, RequireFields<SubscriptiontransferArgs, 'id' | 'subgraphError'>>;
  transfers?: SubscriptionResolver<Array<ResolversTypes['Transfer']>, "transfers", ParentType, ContextType, RequireFields<SubscriptiontransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  withdraw?: SubscriptionResolver<Maybe<ResolversTypes['Withdraw']>, "withdraw", ParentType, ContextType, RequireFields<SubscriptionwithdrawArgs, 'id' | 'subgraphError'>>;
  withdraws?: SubscriptionResolver<Array<ResolversTypes['Withdraw']>, "withdraws", ParentType, ContextType, RequireFields<SubscriptionwithdrawsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export type TaskCreatedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TaskCreated'] = ResolversParentTypes['TaskCreated']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  taskId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  creator?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  assignee?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  reward?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  endDate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskReviewedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TaskReviewed'] = ResolversParentTypes['TaskReviewed']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  taskId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  reviewer?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskStartedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TaskStarted'] = ResolversParentTypes['TaskStarted']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  taskId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  assignee?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskUpdatedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TaskUpdated'] = ResolversParentTypes['TaskUpdated']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  taskId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TitleUpdatedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TitleUpdated'] = ResolversParentTypes['TitleUpdated']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  taskId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransferResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Transfer'] = ResolversParentTypes['Transfer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WithdrawResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Withdraw'] = ResolversParentTypes['Withdraw']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  authorizationId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  withdrawer?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Approval?: ApprovalResolvers<ContextType>;
  ApprovalForAll?: ApprovalForAllResolvers<ContextType>;
  AuthorizeOperator?: AuthorizeOperatorResolvers<ContextType>;
  AuthorizePersonnel?: AuthorizePersonnelResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  Deposit?: DepositResolvers<ContextType>;
  DescriptionUpdated?: DescriptionUpdatedResolvers<ContextType>;
  EndDateUpdated?: EndDateUpdatedResolvers<ContextType>;
  Int8?: GraphQLScalarType;
  MetadataUpdated?: MetadataUpdatedResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  QuorumUpdated?: QuorumUpdatedResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  TaskCreated?: TaskCreatedResolvers<ContextType>;
  TaskReviewed?: TaskReviewedResolvers<ContextType>;
  TaskStarted?: TaskStartedResolvers<ContextType>;
  TaskUpdated?: TaskUpdatedResolvers<ContextType>;
  TitleUpdated?: TitleUpdatedResolvers<ContextType>;
  Transfer?: TransferResolvers<ContextType>;
  Withdraw?: WithdrawResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = TasksManagerTypes.Context & BaseMeshContext;


import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/TasksManager/introspectionSchema":
      return Promise.resolve(importedModule$0) as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const tasksManagerTransforms = [];
const additionalTypeDefs = [] as any[];
const tasksManagerHandler = new GraphqlHandler({
              name: "TasksManager",
              config: {"endpoint":"https://api.studio.thegraph.com/query/57887/web3task-mumbai-testnet/version/latest"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("TasksManager"),
              logger: logger.child("TasksManager"),
              importFn,
            });
sources[0] = {
          name: 'TasksManager',
          handler: tasksManagerHandler,
          transforms: tasksManagerTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      {
        document: AuthorizedPersonnelsQueryDocument,
        get rawSDL() {
          return printWithCache(AuthorizedPersonnelsQueryDocument);
        },
        location: 'AuthorizedPersonnelsQueryDocument.graphql'
      }
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext, TGlobalContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type authorizedPersonnelsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type authorizedPersonnelsQueryQuery = { authorizePersonnels: Array<Pick<AuthorizePersonnel, 'roleId' | 'isAuthorized' | 'authorizedAddress'>> };


export const authorizedPersonnelsQueryDocument = gql`
    query authorizedPersonnelsQuery {
  authorizePersonnels(first: 2) {
    roleId
    isAuthorized
    authorizedAddress
  }
}
    ` as unknown as DocumentNode<authorizedPersonnelsQueryQuery, authorizedPersonnelsQueryQueryVariables>;


export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    authorizedPersonnelsQuery(variables?: authorizedPersonnelsQueryQueryVariables, options?: C): Promise<authorizedPersonnelsQueryQuery> {
      return requester<authorizedPersonnelsQueryQuery, authorizedPersonnelsQueryQueryVariables>(authorizedPersonnelsQueryDocument, variables, options) as Promise<authorizedPersonnelsQueryQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;