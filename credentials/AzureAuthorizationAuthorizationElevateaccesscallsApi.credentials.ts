import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureAuthorizationAuthorizationElevateaccesscallsApi implements ICredentialType {
        name = 'N8nDevAzureAuthorizationAuthorizationElevateaccesscallsApi';

        displayName = 'Azure Authorization Authorization Elevateaccesscalls API';

        icon: Icon = { light: 'file:../nodes/AzureAuthorizationAuthorizationElevateaccesscalls/azure-authorization-authorization-elevateaccesscalls.png', dark: 'file:../nodes/AzureAuthorizationAuthorizationElevateaccesscalls/azure-authorization-authorization-elevateaccesscalls.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Authorization Authorization Elevateaccesscalls API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
