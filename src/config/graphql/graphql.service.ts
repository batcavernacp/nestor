import { GqlOptionsFactory } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

@Injectable()
export class GraphqlService implements GqlOptionsFactory {
  createGqlOptions(): ApolloDriverConfig {
    return {
      autoSchemaFile: 'schema.gql',
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      context: () => ({
        teste: 123,
      }),
    };
  }
}
