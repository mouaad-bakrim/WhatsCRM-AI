"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Upload, FileText, FileSpreadsheet, CheckCircle, AlertCircle, Download, Eye } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { ModeToggle } from "@/components/mode-toggle";

export default function ImportPage() {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);
  const { toast } = useToast();

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    setIsUploading(true);
    setUploadProgress(0);

    // Simulation du téléchargement
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          
          // Ajouter les fichiers téléchargés
          const newFiles = Array.from(files).map((file, index) => ({
            id: Date.now() + index,
            name: file.name,
            size: file.size,
            type: file.type,
            status: 'success',
            contacts: Math.floor(Math.random() * 500) + 50,
            whatsappNumbers: Math.floor(Math.random() * 300) + 20,
          }));
          
          setUploadedFiles(prev => [...prev, ...newFiles]);
          
          toast({
            title: "Fichiers importés avec succès",
            description: `${files.length} fichier(s) traité(s)`,
          });
          
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const sampleData = [
    { nom: "Jean Dupont", telephone: "+33123456789", email: "jean@example.com", statut: "Nouveau" },
    { nom: "Marie Martin", telephone: "+33987654321", email: "marie@example.com", statut: "Prospect" },
    { nom: "Pierre Durand", telephone: "+33456789123", email: "pierre@example.com", statut: "Client" },
    { nom: "Sophie Leroy", telephone: "+33789123456", email: "sophie@example.com", statut: "Nouveau" },
  ];

  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <div className="flex items-center justify-between w-full">
          <h1 className="text-xl font-semibold">Importation des données</h1>
          <ModeToggle />
        </div>
      </header>
      
      <div className="flex-1 space-y-6 p-6">
        {/* Zone de téléchargement */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Importer vos fichiers
            </CardTitle>
            <CardDescription>
              Importez vos fichiers PDF, CSV ou Excel contenant les données clients
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="file-upload">Sélectionner les fichiers</Label>
              <Input
                id="file-upload"
                type="file"
                multiple
                accept=".pdf,.csv,.xlsx,.xls"
                onChange={handleFileUpload}
                disabled={isUploading}
              />
            </div>
            
            {isUploading && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Téléchargement en cours...</span>
                  <span>{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} className="w-full" />
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="flex items-center gap-1">
                <FileText className="h-3 w-3" />
                PDF
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <FileSpreadsheet className="h-3 w-3" />
                CSV
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <FileSpreadsheet className="h-3 w-3" />
                Excel
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Fichiers téléchargés */}
        {uploadedFiles.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Fichiers importés</CardTitle>
              <CardDescription>
                Résumé des fichiers traités et données extraites
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {uploadedFiles.map((file) => (
                  <div key={file.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        {file.status === 'success' ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-red-500" />
                        )}
                        <FileText className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">{file.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {file.contacts} contacts • {file.whatsappNumbers} numéros WhatsApp
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        Aperçu
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        Exporter
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Aperçu des données */}
        <Card>
          <CardHeader>
            <CardTitle>Aperçu des données</CardTitle>
            <CardDescription>
              Exemple de données extraites automatiquement
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="h-12 px-4 text-left align-middle font-medium">Nom</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Téléphone</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Email</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Statut</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleData.map((row, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-4 align-middle">{row.nom}</td>
                        <td className="p-4 align-middle font-mono text-sm">{row.telephone}</td>
                        <td className="p-4 align-middle">{row.email}</td>
                        <td className="p-4 align-middle">
                          <Badge variant="outline">{row.statut}</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-muted-foreground">
                Affichage de 4 sur 247 contacts
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
