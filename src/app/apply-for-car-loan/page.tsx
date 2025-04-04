import React from 'react'
import CarLoanWizard from '@/components/common/CarLoanWizard'

export default async function page(ctx: any) {
  const { id } = await ctx.searchParams;
  return <CarLoanWizard id={id} />
}

export const revalidate = 60; 