/* eslint-disable import/order */
import { GraphQLResolveInfo } from "graphql";
import { IContext } from "../context";
import * as Operations from "./documents";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type InputSocialEvent = {
  date: Scalars["String"];
  details: Scalars["String"];
  link: Scalars["String"];
  speaker: Scalars["String"];
  title: Scalars["String"];
};

export type Mutation = {
  __typename: "Mutation";
  generateSocialEventContent?: Maybe<Array<SocialMediaContent>>;
};

export type MutationgenerateSocialEventContentArgs = {
  body: InputSocialEvent;
};

export type Query = {
  __typename: "Query";
  getList: Scalars["String"];
};

export type SocialMediaContent = {
  __typename: "SocialMediaContent";
  content: Scalars["String"];
  date: Scalars["String"];
  where: SocialMediaTypes;
};

export enum SocialMediaTypes {
  facebook = "facebook",
  linkedin = "linkedin",
  twitter = "twitter",
  whatsapp = "whatsapp",
}

export type SocialMediaContentFieldsFragment = {
  __typename: "SocialMediaContent";
  date: string;
  where: SocialMediaTypes;
  content: string;
};

export type GenerateSocialEventContentMutationVariables = Exact<{
  body: InputSocialEvent;
}>;

export type GenerateSocialEventContentMutationResult = {
  __typename: "Mutation";
  generateSocialEventContent?: Array<{
    __typename: "SocialMediaContent";
    date: string;
    where: SocialMediaTypes;
    content: string;
  }> | null;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  InputSocialEvent: InputSocialEvent;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  SocialMediaContent: ResolverTypeWrapper<SocialMediaContent>;
  SocialMediaTypes: SocialMediaTypes;
  String: ResolverTypeWrapper<Scalars["String"]>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars["Boolean"];
  InputSocialEvent: InputSocialEvent;
  Mutation: {};
  Query: {};
  SocialMediaContent: SocialMediaContent;
  String: Scalars["String"];
}>;

export type MutationResolvers<
  ContextType = IContext,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = ResolversObject<{
  generateSocialEventContent?: Resolver<
    Maybe<Array<ResolversTypes["SocialMediaContent"]>>,
    ParentType,
    ContextType,
    RequireFields<MutationgenerateSocialEventContentArgs, "body">
  >;
}>;

export type QueryResolvers<
  ContextType = IContext,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = ResolversObject<{
  getList?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
}>;

export type SocialMediaContentResolvers<
  ContextType = IContext,
  ParentType extends ResolversParentTypes["SocialMediaContent"] = ResolversParentTypes["SocialMediaContent"]
> = ResolversObject<{
  content?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  date?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  where?: Resolver<ResolversTypes["SocialMediaTypes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = IContext> = ResolversObject<{
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SocialMediaContent?: SocialMediaContentResolvers<ContextType>;
}>;

export type GenerateSocialEventContentMutationFn = Apollo.MutationFunction<
  GenerateSocialEventContentMutationResult,
  GenerateSocialEventContentMutationVariables
>;

/**
 * __useGenerateSocialEventContentMutation__
 *
 * To run a mutation, you first call `useGenerateSocialEventContentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateSocialEventContentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateSocialEventContentMutation, { data, loading, error }] = useGenerateSocialEventContentMutation({
 *   variables: {
 *      body: // value for 'body'
 *   },
 * });
 */
export function useGenerateSocialEventContentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    GenerateSocialEventContentMutationResult,
    GenerateSocialEventContentMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    GenerateSocialEventContentMutationResult,
    GenerateSocialEventContentMutationVariables
  >(Operations.GenerateSocialEventContent, options);
}
export type GenerateSocialEventContentMutationHookResult = ReturnType<
  typeof useGenerateSocialEventContentMutation
>;
export type GenerateSocialEventContentMutationResult =
  Apollo.MutationResult<GenerateSocialEventContentMutationResult>;
export type GenerateSocialEventContentMutationOptions =
  Apollo.BaseMutationOptions<
    GenerateSocialEventContentMutationResult,
    GenerateSocialEventContentMutationVariables
  >;
