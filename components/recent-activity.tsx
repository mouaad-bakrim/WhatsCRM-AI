import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const activities = [
  {
    id: 1,
    user: "Marie Dubois",
    action: "a envoyé un message à",
    target: "Jean Martin",
    time: "Il y a 2 minutes",
    avatar: "MD",
  },
  {
    id: 2,
    user: "Pierre Durand",
    action: "a qualifié le client",
    target: "Sophie Leroy",
    time: "Il y a 5 minutes",
    avatar: "PD",
  },
  {
    id: 3,
    user: "IA Assistant",
    action: "a généré une réponse pour",
    target: "Lucas Bernard",
    time: "Il y a 8 minutes",
    avatar: "IA",
  },
  {
    id: 4,
    user: "Anne Moreau",
    action: "a créé une campagne",
    target: "Promotion Été 2024",
    time: "Il y a 15 minutes",
    avatar: "AM",
  },
  {
    id: 5,
    user: "Thomas Petit",
    action: "a importé",
    target: "150 nouveaux contacts",
    time: "Il y a 30 minutes",
    avatar: "TP",
  },
];

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={`/generic-placeholder-icon.png?height=36&width=36`} alt="Avatar" />
            <AvatarFallback>{activity.avatar}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {activity.user} {activity.action} <span className="font-semibold">{activity.target}</span>
            </p>
            <p className="text-sm text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
