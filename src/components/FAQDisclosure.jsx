import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/16/solid'
import { FAQ } from '../utils/constants'

function FAQDisclosure() {
  return (
    <div className="h-full w-full">
      <div className="w-full max-w-lg divide-y-2 divide-[#E8E8E8] rounded-xl">
        {FAQ.map((faq) => (
            <Disclosure as="div" className="py-6">
            <DisclosureButton className="group flex w-full items-center justify-between">
              <span className="text-lg">
                {faq?.Q}
              </span>
              <PlusIcon 
              className="size-5 fill-[#5BB5A2] group-data-[hover]:fill-[#5BB5A2] group-data-[open]:rotate-45" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 text-[#1A191E80]">
              {faq?.A}
            </DisclosurePanel>
          </Disclosure> 
        ))}     
      </div>
    </div>
  )
}

export default FAQDisclosure