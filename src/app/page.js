'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
    const router = useRouter();

    useEffect(() => {

    }, [])
    

    return (
        <main className={styles.main}>
        <div className={styles.description}>
            {router.push('/login')}
            <Stack spacing={2}>
            </Stack>
        </div>
        </main>
    )
}
