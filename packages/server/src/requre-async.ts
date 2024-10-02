import { ESLintUtils, AST_NODE_TYPES, TSESTree } from '@typescript-eslint/utils'
import * as ts from 'typescript'
import { RuleTester } from '@typescript-eslint/rule-tester'

export function describeNode(node: TSESTree.Node | null): string {
  if (node === null) {
    return 'null'
  }

  switch (node.type) {
    case AST_NODE_TYPES.ArrayExpression:
      return `Array containing ${node.elements.map(describeNode).join(', ')}`

    case AST_NODE_TYPES.Literal:
      return `Literal value ${node.raw}`

    default:
      return '🤷'
  }
}

type MessageIds = 'lowercase' | 'uppercase'

type Options = [
  {
    preferredCase?: 'lower' | 'upper'
  }
]

interface MyPluginDocs {
  recommended: boolean
}

const createRule = ESLintUtils.RuleCreator<MyPluginDocs>(
  (name) => `https://example.com/rule/${name}`
)

export const rule = createRule<Options, MessageIds>({
  create(context, options) {
    if (options[0].preferredCase === 'lower') {
      return {
        FunctionDeclaration(node) {
          if (node.id != null) {
            if (/^[a-z]/.test(node.id.name)) {
              context.report({
                messageId: 'uppercase',
                node: node.id,
              })
            }
          }
        },
      }
    }
    // return {
    //   'FunctionDeclaration, TSInterfaceDeclaration'(
    //     node: TSESTree.FunctionDeclaration | TSESTree.TSInterfaceDeclaration
    //   ) {
    //     if (/^[a-z]/.test(node.id?.name ?? '')) {
    //       // ...
    //     }
    //   },
    // }
    return {
      ForOfStatement(node) {
        // 1. Grab the parser services for the rule
        const services = ESLintUtils.getParserServices(context)

        // 2. Find the TS type for the ES node
        const type = services.getTypeAtLocation(node.right)

        // 3. Check the TS type's backing symbol for being an enum
        if (type.symbol.flags & ts.SymbolFlags.Enum) {
          context.report({
            messageId: 'loopOverEnum',
            node: node.right,
          })
        }
      },
    }
  },
  name: 'uppercase-first-declarations',
  meta: {
    docs: {
      description:
        'Function declaration names should start with an upper-case letter.',
      recommended: true,
    },
    messages: {
      uppercase: 'Start this name with an upper-case letter.',
      lowercase: 'Start this name with an lower-case letter.',
    },
    type: 'suggestion',
    schema: [
      {
        type: 'object',
        properties: {
          preferredCase: {
            type: 'string',
            enum: ['lower', 'upper'],
          },
        },
        additionalProperties: false,
      },
    ],
  },
  defaultOptions: [
    {
      preferredCase: 'lower',
    },
  ],
})

const ruleTester = new RuleTester()

ruleTester.run('my-rule', rule, {
  valid: [
    /* ... */
  ],
  invalid: [
    /* ... */
  ],
})

const typedRuleTester = new RuleTester({
  languageOptions: {
    parserOptions: {
      projectService: {
        allowDefaultProject: ['*.ts*'],
      },
      tsconfigRootDir: __dirname,
    },
  },
})

ruleTester.run('my-typed-rule', rule, {
  valid: [
    /* ... */
  ],
  invalid: [
    /* ... */
  ],
})
