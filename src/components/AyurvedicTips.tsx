import { Heart, Sun, Droplets, Leaf } from 'lucide-react';

const tips = [
  {
    icon: Sun,
    title: "Wake with the Sun",
    description: "Rising early, ideally before sunrise, aligns with natural rhythms and boosts energy.",
    color: "amber"
  },
  {
    icon: Droplets,
    title: "Warm Water First",
    description: "Start your day with warm water to kindle digestive fire and cleanse toxins.",
    color: "blue"
  },
  {
    icon: Heart,
    title: "Eat Mindfully",
    description: "Focus on your meal without distractions. Chew thoroughly and eat in a calm state.",
    color: "rose"
  },
  {
    icon: Leaf,
    title: "Balance Your Doshas",
    description: "Understand your body constitution (Vata, Pitta, Kapha) for optimal health.",
    color: "green"
  }
];

const colorClasses = {
  amber: {
    bg: 'bg-amber-100',
    icon: 'text-amber-700',
    border: 'border-amber-200'
  },
  blue: {
    bg: 'bg-blue-100',
    icon: 'text-blue-700',
    border: 'border-blue-200'
  },
  rose: {
    bg: 'bg-rose-100',
    icon: 'text-rose-700',
    border: 'border-rose-200'
  },
  green: {
    bg: 'bg-green-100',
    icon: 'text-green-700',
    border: 'border-green-200'
  }
};

export default function AyurvedicTips() {
  return (
    <div className="bg-white rounded-2xl p-6 border-2 border-emerald-200 shadow-lg">
      <h3 className="text-xl font-bold text-emerald-900 mb-4">Daily Ayurvedic Wisdom</h3>
      <div className="space-y-3">
        {tips.map((tip, index) => {
          const Icon = tip.icon;
          const colors = colorClasses[tip.color as keyof typeof colorClasses];

          return (
            <div
              key={index}
              className={`flex gap-3 p-4 rounded-xl border ${colors.border} ${colors.bg} hover:shadow-md transition-all duration-300`}
            >
              <div className={`w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 border ${colors.border}`}>
                <Icon className={colors.icon} size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">{tip.title}</h4>
                <p className="text-sm text-gray-700">{tip.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
