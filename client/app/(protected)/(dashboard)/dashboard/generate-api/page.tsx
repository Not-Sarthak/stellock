'use client';

import { useState } from 'react';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { ClipboardCopy } from 'lucide-react';
import { toast, Toaster } from 'sonner';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'API Key', link: '/dashboard/generate-api' }
];

export default function Generate() {
  const [apiKey, setApiKey] = useState('clybuj0xp06yzn7x7q9nng2wv');
  const [appSecret, setAppSecret] = useState(
    '********************************'
  );
  const [isSecretVisible, setIsSecretVisible] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(event.target.value);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  const handleResetSecret = () => {
    setAppSecret('********************************');
    toast.success('App Secret has been reset.');
  };

  return (
    <div className="relative flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="fixed right-0 top-0 z-50">
        <Toaster position="top-right" richColors />
      </div>
      <Breadcrumbs items={breadcrumbItems} />
      <div className="flex items-start justify-between">
        <Heading
          title="API Keys"
          description="Use these values to initialize your Stellock Clients."
        />
      </div>
      <Separator />
      <div>
        <div className="mb-8">
          <label className="block text-sm mt-8 font-medium text-gray-700">
            App ID
          </label>
          <div className="flex items-center">
            <Input
              value={apiKey}
              onChange={handleInputChange}
              className="w-full md:max-w-sm"
              readOnly
            />
            <button
              onClick={() => handleCopy(apiKey)}
              className="ml-2 p-2 text-gray-500 hover:text-gray-700"
            >
              <ClipboardCopy className="h-5 w-5" />
            </button>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            The app ID is used to associate your Stellock client with this app.
          </p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            App Secret
          </label>
          <div className="flex items-center">
            <Input
              value={appSecret}
              className="w-full md:max-w-sm"
              readOnly
              type={isSecretVisible ? 'text' : 'password'}
            />
            <button
              onClick={() => setIsSecretVisible(!isSecretVisible)}
              className="ml-2 p-2 text-gray-500 hover:text-gray-700"
            >
              {isSecretVisible ? 'Hide' : 'Show'}
            </button>
            <button
              onClick={handleResetSecret}
              className="ml-2 p-2 text-red-500 hover:text-red-700"
            >
              Reset
            </button>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Stellock does not store your app secret. Please be sure to store it
            somewhere safe.
          </p>
        </div>
      </div>
    </div>
  );
}
