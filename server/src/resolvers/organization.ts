import {
  Resolver,
  Mutation,
  Arg,
  Field,
  ObjectType,
  InputType,
} from "type-graphql";

import Organization from "../entities/Organization";

@InputType()
class OrganizationInput {
  @Field()
  name!: string;
  @Field()
  description: string;
  @Field()
  country: string;
  @Field()
  city: string;
}

@ObjectType()
class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
class OrganizationResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => Organization, { nullable: true })
  user?: Organization;
}

@Resolver(Organization)
export class OrganizationResolver {
  @Mutation(() => Organization)
  async createOrganization(
    @Arg("input") input: OrganizationInput
  ): Promise<Organization> {
    return Organization.create(input).save();
  }
}
