import CarLoanWizard from '@/components/common/CarLoanWizard'
import React from 'react'

export default function page() {
  return (
    <div>
      <CarLoanWizard />
    </div>
  )
}

// Add ISR logic for revalidation every 3 minutes
export async function getStaticProps() {
  return {
    props: {}, // Add any required props for the page here if necessary
    revalidate: 180, // Revalidate the page every 3 minutes (180 seconds)
  };
}
