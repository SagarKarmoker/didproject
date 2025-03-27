'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function VerifierPage() {
  const [did, setDid] = useState('');
  const [verificationStatus, setVerificationStatus] = useState<'idle' | 'loading' | 'verified' | 'failed'>('idle');
  const [credentials, setCredentials] = useState<any[]>([]);

  const handleVerification = async () => {
    if (!did) return;
    
    setVerificationStatus('loading');
    try {
      // TODO: Replace with actual API endpoint
      const response = await fetch(`/api/verify?did=${did}`);
      const data = await response.json();
      
      if (data.verified) {
        setVerificationStatus('verified');
        setCredentials(data.credentials || []);
      } else {
        setVerificationStatus('failed');
        setCredentials([]);
      }
    } catch (error) {
      console.error('Verification failed:', error);
      setVerificationStatus('failed');
      setCredentials([]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 p-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
      >
        DID Verifier
      </motion.h1>
      
      <Card className="backdrop-blur-xl bg-background/30 border border-accent/10 shadow-lg rounded-xl p-8 mb-8 transition-all duration-300 hover:shadow-accent/5">
        <div className="flex gap-4">
          <Input
            placeholder="Enter DID to verify"
            value={did}
            onChange={(e) => setDid(e.target.value)}
            className="flex-1 bg-background/50 border-accent/20 focus:border-accent/40 focus:ring-accent/20 transition-all duration-300 placeholder:text-muted-foreground/50"
          />
          <Button
            onClick={handleVerification}
            disabled={!did || verificationStatus === 'loading'}
            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-accent/25 transition-all duration-300"
          >
            <span className="relative">
              {verificationStatus === 'loading' ? 'Verifying...' : 'Verify'}
              <span className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 animate-shimmer"></span>
            </span>
          </Button>
        </div>

        {verificationStatus !== 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6"
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{
                  scale: verificationStatus === 'loading' ? [1, 1.2, 1] : 1
                }}
                transition={{
                  repeat: verificationStatus === 'loading' ? Infinity : 0,
                  duration: 1
                }}
                className={`w-4 h-4 rounded-full shadow-lg ${{
                  loading: 'bg-yellow-500 shadow-yellow-500/50',
                  verified: 'bg-green-500 shadow-green-500/50',
                  failed: 'bg-red-500 shadow-red-500/50'
                }[verificationStatus]}`}
              />
              <span className="capitalize font-medium text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                {verificationStatus}
              </span>
            </div>
          </motion.div>
        )}
      </Card>

      <AnimatePresence>
        {verificationStatus === 'verified' && credentials.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <Card className="backdrop-blur-xl bg-background/30 border border-accent/10 shadow-lg rounded-xl p-8 transition-all duration-300 hover:shadow-accent/5">
          <h2 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Credentials</h2>
          <div className="space-y-4">
            {credentials.map((credential, index) => (
              <Card key={index} className="backdrop-blur-md bg-background/20 border border-accent/10 shadow-md rounded-lg p-6 transition-all duration-300 hover:shadow-accent/5 hover:scale-[1.02]">
                <pre className="whitespace-pre-wrap">
                  {JSON.stringify(credential, null, 2)}
                </pre>
              </Card>
            ))}
          </div>
          </Card>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
}