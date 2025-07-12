'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function Home() {
  const { token } = useAuth();
  const router = useRouter();

  useEffect(() => {
    router.replace(token ? '/tasks' : '/login');
  }, [token]);

  return null;
}