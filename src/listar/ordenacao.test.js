import React from 'react';
import ReactDom from 'react-dom';
import Ordenacao from './ordenacao';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

describe('deve renderizarc o componente de ordenação sem erros',()=>{
    it('deve renderizar o componente sem erros',()=>{
        const div = document.createElement('div');
        ReactDom.render(
            <Ordenacao
            ordenarAsc={false}
            ordenarDesc={false}
            />, div
        )
        ReactDom.unmountComponentAtNode(div)
    });

    it('deve exibir a ordenação padrão', () => {
        const { getByTestId } = render(
          <Ordenacao ordenarAsc={false} ordenarDesc={false} />
        );
        expect(getByTestId('faSort')).not.toHaveClass('hidden');
        expect(getByTestId('faSortUp')).toHaveClass('hidden');
        expect(getByTestId('faSortDown')).toHaveClass('hidden');
      });

      it('deve exibir a ordenação acendente', () => {
        const { getByTestId } = render(
          <Ordenacao ordenarAsc={true} ordenarDesc={false} />
        );
        expect(getByTestId('faSort')).toHaveClass('hidden');
        expect(getByTestId('faSortUp')).not.toHaveClass('hidden');
        expect(getByTestId('faSortDown')).toHaveClass('hidden');
      });

      it('deve exibir a ordenação acendente', () => {
        const { getByTestId } = render(
          <Ordenacao ordenarAsc={false} ordenarDesc={true} />
        );
        expect(getByTestId('faSort')).toHaveClass('hidden');
        expect(getByTestId('faSortUp')).toHaveClass('hidden');
        expect(getByTestId('faSortDown')).not.toHaveClass('hidden');
      });
      
})

