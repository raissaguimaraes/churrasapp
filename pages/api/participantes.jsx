// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
      {
      id: 1, 
      name: 'Alice',
      valor: "R$20,00",
    },
    {
      id: 2, 
      name: 'Beto',
      valor: "R$20,00"
    },
    {
      id: 3, 
      name: 'Diego B.',
      valor: "R$20,00"
    },
    {
      id: 4, 
      name: 'Diego P.',
      valor: "R$10,00"
    },{
      id: 5, 
      name: 'Fernando',
      valor: "R$20,00"
    },
    {
      id: 6, 
      name: 'Gabriel',
      valor: null
    },
    {
      id: 7, 
      name: 'Leonardo',
      valor: "R$10,00"
    },
    {
      id: 8, 
      name: 'Marcus J.',
      valor: "R$10,00"
    },
    {
      id: 9, 
      name: 'Michele',
      valor: "R$20,00",
    },
    {
      id: 10, 
      name: 'Paulo',
      valor: "R$20,00"
    },
    {
      id: 11, 
      name: 'Ruan',
      valor: null
    },
    {
      id: 12, 
      name: 'Thales',
      valor: "R$10,00"
    },{
      id: 13, 
      name: 'Ralf',
      valor: "R$20,00"
    },
    {
      id: 14, 
      name: 'Wait',
      valor: null
    },
    {
      id: 15, 
      name: 'Rafael S.',
      valor: "R$10,00"
    }
    ]
  )
}
