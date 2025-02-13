import { Navigation, TextContent } from './components';
import ButtonText from './shared/ButtonText/ui/ButtonText';

export default function page() {
  return (
    <div>
      <Navigation />
      <TextContent />
      <ButtonText />
    </div>
  );
}
