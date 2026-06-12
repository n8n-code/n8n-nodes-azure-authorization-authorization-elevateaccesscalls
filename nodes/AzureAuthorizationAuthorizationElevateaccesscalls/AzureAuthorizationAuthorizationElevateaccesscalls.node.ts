import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureAuthorizationAuthorizationElevateaccesscalls implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Authorization Authorization Elevateaccesscalls',
                name: 'N8nDevAzureAuthorizationAuthorizationElevateaccesscalls',
                icon: { light: 'file:./azure-authorization-authorization-elevateaccesscalls.png', dark: 'file:./azure-authorization-authorization-elevateaccesscalls.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'RBAC enables granular policy administration for individual resources or groups.',
                defaults: { name: 'Azure Authorization Authorization Elevateaccesscalls' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureAuthorizationAuthorizationElevateaccesscallsApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
