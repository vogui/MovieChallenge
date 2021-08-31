import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Footer from './Footer'

test('renders component', () => {
  
 const component = render(<Footer />);

 component.getAllByText('/GuillermoVogeler')
 component.getByText('/Contact')

});
