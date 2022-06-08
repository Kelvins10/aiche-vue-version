import { createWebHistory, createRouter } from "vue-router"
import HomePage from "@/views/HomePage" 
import CompetenciasPage from "@/views/CompetenciasPage"
import CronogramaPage from "@/views/CronogramaPage"
import ProtocolosPage from "@/views/ProtocolosPage"
import ContactoPage from "@/views/ContactoPage"
import InscripcionesPage from "@/views/InscripcionesPage"
import PonentesPage from "@/views/PonentesPage"

const routes = [{
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/competencias",
    name: "CompetenciasPage",
    component: CompetenciasPage,
  },
  {
    path: "/cronograma",
    name: "CronogramaPage",
    component: CronogramaPage,
  },
  {
    path: "/protocolos-de-seguridad",
    name: "ProtocolosPage",
    component: ProtocolosPage,
  },
  {
    path: "/contacto",
    name: "ContactoPage",
    component: ContactoPage,
  },
  {
    path: "/inscripciones",
    name: "InscripcionesPage",
    component: InscripcionesPage,
  },
  {
    path: "/ponentes",
    name: "PonentesPage",
    component: PonentesPage,
  },
]
  
  const router = createRouter({ 
      history: createWebHistory(),
      routes
   })

  export default router