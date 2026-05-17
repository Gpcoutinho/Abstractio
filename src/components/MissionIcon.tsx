import React from 'react';
import {
  ArrowsHorizontal,
  Bank,
  Circle,
  Clipboard,
  Diamond,
  Dna,
  Factory,
  Flask,
  Gear,
  Globe,
  Lock,
  LockOpen,
  MapTrifold,
  MaskHappy,
  Pencil,
  PuzzlePiece,
  Ruler,
  Shuffle,
  Spinner,
  Tag,
  Target,
  Waveform,
  Building,
  City,
  Plug,
} from '@phosphor-icons/react';

const iconMap = {
  PiWaveform: Waveform,
  PiPuzzlePiece: PuzzlePiece,
  PiCircle: Circle,
  PiRuler: Ruler,
  PiTag: Tag,
  PiGear: Gear,
  PiBuilding: Building,
  PiClipboard: Clipboard,
  PiGlobe: Globe,
  PiSpinner: Spinner,
  PiLock: Lock,
  PiDna: Dna,
  PiMaskHappy: MaskHappy,
  PiCity: City,
  PiPencil: Pencil,
  PiShuffle: Shuffle,
  PiBank: Bank,
  PiPlug: Plug,
  PiArrowsHorizontal: ArrowsHorizontal,
  PiFactory: Factory,
  PiTarget: Target,
  PiLockOpen: LockOpen,
  PiDiamond: Diamond,
  PiFlask: Flask,
  PiMapTrifold: MapTrifold,
} as const;

type PerIconName = keyof typeof iconMap;

interface MissionIconProps {
  iconName: string;
  completed: boolean;
  className?: string;
}

const defaultClasses = 'inline-flex';

const MissionIcon: React.FC<MissionIconProps> = ({ iconName, completed, className }) => {
  const IconComponent = iconMap[iconName as PerIconName] ?? Circle;
  const weight = completed ? 'fill' : 'regular';
  const colorClass = completed ? 'text-success' : 'text-textSecondary';

  return (
    <IconComponent
      weight={weight}
      className={`${defaultClasses} ${colorClass} ${className ?? 'w-6 h-6'}`.trim()}
      aria-hidden="true"
    />
  );
};

export default MissionIcon;
