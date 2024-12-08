import React from 'react'
import { SellerCard } from '../components/Dashboard/SellerCard'

export const SellerList = () => {
  return (
    <section className="h-[90vh]">
      <h1 className="text-[2rem] font-semibold my-8 ">Seller List</h1>

      {/* Header section */}

      <SellerCard />
    </section>
  )
}
