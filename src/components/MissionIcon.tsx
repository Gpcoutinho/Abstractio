import React from 'react';
import {
  ArrowsHorizontalIcon,
  BankIcon,
  CircleIcon,
  ClipboardIcon,
  DiamondIcon,
  DnaIcon,
  FactoryIcon,
  FlaskIcon,
  GearIcon,
  GlobeIcon,
  LockIcon,
  LockOpenIcon,
  MapTrifoldIcon,
  MaskHappyIcon,
  PencilIcon,
  PuzzlePieceIcon,
  RulerIcon,
  ShuffleIcon,
  SpinnerIcon,
  TagIcon,
  TargetIcon,
  WaveformIcon,
  BuildingIcon,
  CityIcon,
  PlugIcon,
} from '@phosphor-icons/react';

const iconMap = {
  PiWaveform: WaveformIcon,
  PiPuzzlePiece: PuzzlePieceIcon,
  PiCircle: CircleIcon,
  PiRuler: RulerIcon,
  PiTag: TagIcon,
  PiGear: GearIcon,
  PiBuilding: BuildingIcon,
  PiClipboard: ClipboardIcon,
  PiGlobe: GlobeIcon,
  PiSpinner: SpinnerIcon,
  PiLock: LockIcon,
  PiDna: DnaIcon,
  PiMaskHappy: MaskHappyIcon,
  PiCity: CityIcon,
  PiPencil: PencilIcon,
  PiShuffle: ShuffleIcon,
  PiBank: BankIcon,
  PiPlug: PlugIcon,
  PiArrowsHorizontal: ArrowsHorizontalIcon,
  PiFactory: FactoryIcon,
  PiTarget: TargetIcon,
  PiLockOpen: LockOpenIcon,
  PiDiamond: DiamondIcon,
  PiFlask: FlaskIcon,
  PiMapTrifold: MapTrifoldIcon,
} as const;

type PerIconName = keyof typeof iconMap;

interface MissionIconProps {
  iconName: string;
  completed: boolean;
  className?: string;
}

const defaultClasses = 'inline-flex';

const MissionIcon: React.FC<MissionIconProps> = ({ iconName, completed, className }) => {
  const IconComponent = iconMap[iconName as PerIconName] ?? CircleIcon;
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
