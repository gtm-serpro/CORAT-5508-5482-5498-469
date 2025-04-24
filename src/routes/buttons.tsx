import { Button } from '@/components/button'
import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Mail } from 'lucide-react'

export const Route = createFileRoute('/buttons')({
  component: Buttons,
})

function Buttons() {
  return (
    <div className="p-8 bg-gray-lighten-5 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8 text-gray-darken-4">Button Rounded Options</h1>
      
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4 text-gray-darken-3">Default Rounded</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" rounded="default">Default Rounded</Button>
          <Button variant="secondary" rounded="default">Default Rounded</Button>
          <Button variant="tertiary" rounded="default">Default Rounded</Button>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4 text-gray-darken-3">Rounded Full (Pill)</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" rounded="full">Rounded Full</Button>
          <Button variant="secondary" rounded="full">Rounded Full</Button>
          <Button variant="tertiary" rounded="full">Rounded Full</Button>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4 text-gray-darken-3">No Rounding</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" rounded="none">No Rounding</Button>
          <Button variant="secondary" rounded="none">No Rounding</Button>
          <Button variant="tertiary" rounded="none">No Rounding</Button>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4 text-gray-darken-3">With Icons</h2>
        <div className="flex flex-wrap gap-4">
          <Button icon={<Mail size={16} />} rounded="default">Default Rounded</Button>
          <Button icon={<Mail size={16} />} rounded="full">Rounded Full</Button>
          <Button icon={<ArrowRight size={16} />} iconPosition="right" rounded="full">With Icon</Button>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4 text-gray-darken-3">Size Variations</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button size="sm" rounded="full">Small</Button>
          <Button size="md" rounded="full">Medium</Button>
          <Button size="lg" rounded="full">Large</Button>
        </div>
      </div>
      
      <div className="p-6 bg-primary-darken-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-4 text-white">Inverted Theme</h2>
        <div className="flex flex-wrap gap-4">
          <Button inverted variant="primary" rounded="full">Primary</Button>
          <Button inverted variant="secondary" rounded="full">Secondary</Button>
          <Button inverted variant="tertiary" rounded="full">Tertiary</Button>
        </div>
      </div>
    </div>
  )
}
