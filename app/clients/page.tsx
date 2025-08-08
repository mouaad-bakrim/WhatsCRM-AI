"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, Filter, MessageSquare, Phone, MoreHorizontal, Star, Tag, Plus, Edit } from 'lucide-react';
import { ModeToggle } from "@/components/mode-toggle";

const clients = [
  {
    id: 1,
    nom: "Jean Dupont",
    telephone: "+33123456789",
    email: "jean@example.com",
    qualification: "Chaud",
    score: 85,
    tags: ["VIP", "Prospect"],
    statut: "Actif",
    derniereInteraction: "Il y a 2 heures",
    avatar: "JD"
  },
  {
    id: 2,
    nom: "Marie Martin",
    telephone: "+33987654321",
    email: "marie@example.com",
    qualification: "Tiède",
    score: 65,
    tags: ["Nouveau"],
    statut: "En attente",
    derniereInteraction: "Il y a 1 jour",
    avatar: "MM"
  },
  {
    id: 3,
    nom: "Pierre Durand",
    telephone: "+33456789123",
    email: "pierre@example.com",
    qualification: "Chaud",
    score: 92,
    tags: ["Client", "Premium"],
    statut: "Actif",
    derniereInteraction: "Il y a 30 minutes",
    avatar: "PD"
  },
  {
    id: 4,
    nom: "Sophie Leroy",
    telephone: "+33789123456",
    email: "sophie@example.com",
    qualification: "Froid",
    score: 35,
    tags: ["Prospect"],
    statut: "Inactif",
    derniereInteraction: "Il y a 1 semaine",
    avatar: "SL"
  },
];

export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("Tous");

  const getQualificationColor = (qualification: string) => {
    switch (qualification) {
      case "Chaud": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      case "Tiède": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
      case "Froid": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const getStatutColor = (statut: string) => {
    switch (statut) {
      case "Actif": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "En attente": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Inactif": return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <div className="flex items-center justify-between w-full">
          <h1 className="text-xl font-semibold">Liste des clients</h1>
          <ModeToggle />
        </div>
      </header>
      
      <div className="flex-1 space-y-6 p-6">
        {/* Barre de recherche et filtres */}
        <Card>
          <CardHeader>
            <CardTitle>Recherche et filtres</CardTitle>
            <CardDescription>
              Trouvez rapidement vos clients avec les filtres avancés
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Rechercher par nom, téléphone ou email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    {selectedFilter}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Filtrer par qualification</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setSelectedFilter("Tous")}>
                    Tous
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedFilter("Chaud")}>
                    Chaud
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedFilter("Tiède")}>
                    Tiède
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedFilter("Froid")}>
                    Froid
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Nouveau client
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Liste des clients */}
        <Card>
          <CardHeader>
            <CardTitle>Clients ({clients.length})</CardTitle>
            <CardDescription>
              Gérez vos contacts et leurs qualifications
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {clients.map((client) => (
                <div key={client.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={`/generic-placeholder-icon.png?height=48&width=48`} alt={client.nom} />
                      <AvatarFallback>{client.avatar}</AvatarFallback>
                    </Avatar>
                    
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{client.nom}</h3>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{client.score}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{client.telephone}</span>
                        <span>•</span>
                        <span>{client.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getQualificationColor(client.qualification)}>
                          {client.qualification}
                        </Badge>
                        <Badge className={getStatutColor(client.statut)}>
                          {client.statut}
                        </Badge>
                        {client.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="text-right text-sm text-muted-foreground">
                      <p>Dernière interaction</p>
                      <p>{client.derniereInteraction}</p>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <Button variant="outline" size="sm">
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Phone className="h-4 w-4" />
                      </Button>
                      
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Modifier
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Star className="mr-2 h-4 w-4" />
                            Qualifier
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Tag className="mr-2 h-4 w-4" />
                            Ajouter un tag
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            Supprimer
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-between mt-6">
              <p className="text-sm text-muted-foreground">
                Affichage de {clients.length} sur 247 clients
              </p>
              <div className="flex gap-2">
                <Button variant="outline">Précédent</Button>
                <Button variant="outline">Suivant</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
