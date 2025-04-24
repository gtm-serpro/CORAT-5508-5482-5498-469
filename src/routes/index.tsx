import { createFileRoute } from '@tanstack/react-router'
import { TableDemo } from '@/components/Table'
import { InputWithButton } from '@/components/InputWithButton'
import { Button } from '@/components/ui/button'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { H1 } from '@/components/typography'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="container mx-auto flex flex-col gap-8 mt-8">
      {/* <H1>Emitir Comunicação ou Intimação para Ciência</H1> */}
      <div className='flex justify-between'>
        <Button rounded={'full'}><FontAwesomeIcon icon={faUserPlus} />Incluir Destinatário</Button>
        <InputWithButton/>
      </div>
      <TableDemo/>
    </div>
    
  )
}
