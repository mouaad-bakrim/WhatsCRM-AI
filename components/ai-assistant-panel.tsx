"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Bot, Sparkles, Copy, RefreshCw, ThumbsUp, ThumbsDown } from 'lucide-react';

export function AIAssistantPanel() {
  const [suggestion, setSuggestion] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const suggestions = [
    "Bonjour Jean, nos tarifs premium commencent à 99€/mois avec tous les avantages inclus. Souhaitez-vous que je vous envoie une présentation détaillée ?",
    "Je comprends votre intérêt. Nos forfaits sont flexibles et s'adaptent à vos besoins. Puis-je vous proposer un appel de 15 minutes pour en discuter ?",
    "Excellente question ! Nos prix sont très compétitifs. Permettez-moi de vous expliquer la valeur ajoutée de notre solution premium."
  ];

  const generateSuggestion = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
      setSuggestion(randomSuggestion);
      setIsGenerating(false);
    }, 1500);
  };

  const copySuggestion = () => {
    navigator.clipboard.writeText(suggestion);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="h-5 w-5" />
          Assistant IA
        </CardTitle>
        <CardDescription>
          Suggestions de réponses intelligentes
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Analyse du contexte */}
        <div className="p-3 bg-muted/50 rounded-lg">
          <h4 className="text-sm font-medium mb-2">Analyse du contexte</h4>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Client intéressé</Badge>
            <Badge variant="secondary">Demande de prix</Badge>
            <Badge variant="secondary">Prospect chaud</Badge>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Le client montre un intérêt élevé pour les services premium et demande des informations tarifaires.
          </p>
        </div>

        {/* Zone de suggestion */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium">Suggestion de réponse</h4>
            <Button
              variant="outline"
              size="sm"
              onClick={generateSuggestion}
              disabled={isGenerating}
            >
              {isGenerating ? (
                <RefreshCw className="h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="h-4 w-4" />
              )}
              {isGenerating ? "Génération..." : "Générer"}
            </Button>
          </div>

          {suggestion && (
            <div className="space-y-3">
              <Textarea
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                className="min-h-[100px]"
                placeholder="La suggestion apparaîtra ici..."
              />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <ThumbsUp className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ThumbsDown className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={copySuggestion}>
                    <Copy className="h-4 w-4 mr-1" />
                    Copier
                  </Button>
                  <Button size="sm">
                    Utiliser
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Suggestions rapides */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Réponses rapides</h4>
          <div className="grid gap-2">
            <Button variant="outline" size="sm" className="justify-start text-left h-auto p-2">
              <span className="text-xs">👋 Merci pour votre message, je reviens vers vous rapidement</span>
            </Button>
            <Button variant="outline" size="sm" className="justify-start text-left h-auto p-2">
              <span className="text-xs">📞 Puis-je vous proposer un appel pour en discuter ?</span>
            </Button>
            <Button variant="outline" size="sm" className="justify-start text-left h-auto p-2">
              <span className="text-xs">📧 Je vous envoie la documentation par email</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
