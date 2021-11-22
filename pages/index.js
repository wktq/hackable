import { PrismaClient } from '@prisma/client'
import { useEffect, useState } from 'react';

export const getServerSideProps = async ({ req }) => {
  const prisma = new PrismaClient()

  const manyUsers = await prisma.user.findMany()

  const users = JSON.parse(JSON.stringify(manyUsers));

  return { props: { users } }
}

export default ({ users }) => {
  useEffect(() => {
    console.info(users);
  }, [])

  return (
    <div> 
      {JSON.stringify(users)}
    </div>
  )
}