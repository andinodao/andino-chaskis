import {
  FieldPolicy,
  FieldReadFunction,
  TypePolicies,
  TypePolicy,
} from "@apollo/client/cache";
export type MutationKeySpecifier = (
  | "generateSocialEventContent"
  | MutationKeySpecifier
)[];
export type MutationFieldPolicy = {
  generateSocialEventContent?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryKeySpecifier = ("getList" | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
  getList?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SocialMediaContentKeySpecifier = (
  | "content"
  | "date"
  | "where"
  | SocialMediaContentKeySpecifier
)[];
export type SocialMediaContentFieldPolicy = {
  content?: FieldPolicy<any> | FieldReadFunction<any>;
  date?: FieldPolicy<any> | FieldReadFunction<any>;
  where?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StrictTypedTypePolicies = {
  Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | MutationKeySpecifier
      | (() => undefined | MutationKeySpecifier);
    fields?: MutationFieldPolicy;
  };
  Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | QueryKeySpecifier
      | (() => undefined | QueryKeySpecifier);
    fields?: QueryFieldPolicy;
  };
  SocialMediaContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SocialMediaContentKeySpecifier
      | (() => undefined | SocialMediaContentKeySpecifier);
    fields?: SocialMediaContentFieldPolicy;
  };
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
