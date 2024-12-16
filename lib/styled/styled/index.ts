import { useCallback } from "react";
import { useTheme } from "../hooks"; 
import { callback, component, componentProps, componentStyle } from "./index.d";
import { View, Text, Pressable, ScrollView } from "../components";


const Component = <C extends component, P>(type: component, props: componentProps<C, P>) => {
  switch (type) {
    case "view":
      return View(props);
  
    case "text":
      return Text(props);
    
    case "pressable":
      return Pressable(props);
    
    case "scroll-view":
      return ScrollView(props);
  }
}

export function styled(C: component) {

    return <P extends object>(css: callback<component, P> | componentStyle<component>) => {  
  
      return (props?: componentProps<component, P>) => {
        const { handleChangeMode, ...theme } = useTheme(); // Obtém o tema
        
        // Função para recalcular o estilo com base no tema e nas propriedades
        const styleSheet = useCallback<(props?: componentProps<component, P>) => componentStyle<component>>(
          (props) => {

            if(props === undefined){
              props = {} as componentProps<component, P>
            }
            // Caso o `css` seja um objeto simples
            if (typeof css === 'object') {
              return { ...css, ...theme };
            }
  
            // Caso o `css` seja uma função
            if (typeof css === 'function') {
              const cssResult = css({ theme, ...props }); // Aplica props e tema na função
              return { ...cssResult, ...theme };
            }
  
            // Caso o tipo não seja nem um objeto nem uma função válida
            throw new Error('Não foi possível executar styled');
          },
          [css, theme] // Recalcular quando o css ou o tema mudarem
        );
  
        const style = styleSheet(props); // Retorna o estilo recalculado

        return Component(C, { style, ...props })
      };
    };
  }
