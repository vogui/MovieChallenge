import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Login from './Login';
import { texts } from '../utils/assistant'

test('renders component', () => {
  
 const component = render(<Login />);

 component.getByText(texts.Welcome)
 component.getByText(texts.Login)

});