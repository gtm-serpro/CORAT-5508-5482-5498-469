import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Processo ou Procedimento" />
      <Button type="submit">Incluir</Button>
    </div>
  )
}
