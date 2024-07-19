import Image from 'next/image'
import styles from './page.module.css'
import { Stack, Typography } from '@mui/material'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Stack spacing={2}>
          <Typography h3> HOLA MUNDO EN NEXT</Typography>
        </Stack>
      </div>
    </main>
  )
}
