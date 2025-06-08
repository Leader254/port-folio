import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface CertificationCardProps {
  title: string
  issuer: string
  date: string
  image: string
}

export default function CertificationCard({ title, issuer, date, image }: CertificationCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="relative h-16 w-16 shrink-0">
          <Image src={image || "/placeholder.svg"} alt={issuer} fill className="object-contain" />
        </div>
        <div>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{issuer}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Issued: {date}</p>
      </CardContent>
    </Card>
  )
}
