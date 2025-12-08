📘 Manual de UX & Motion Design (Liquid Experience)
Projeto: Clínica Crer Ser Objetivo da UX: Criar uma navegação imersiva, sem atritos ("Frictionless"), onde o usuário sente que está flutuando através do conteúdo. A tecnologia deve ser invisível, servindo apenas para reforçar a sensação de "Cuidado Premium".

1. O Início: O Preloader Narrativo (0% a 100%)
Como o site será rico visualmente (Glassmorphism, Blurs), precisamos de um carregamento inicial. Transformaremos essa espera em uma experiência de marca.

O Cenário: Tela cheia na cor Off-White (#F9F8F6).

A Animação (Storytelling):

0% - 30% (A Raiz): Uma linha fina, cor Marrom Café, começa a se desenhar na parte inferior central, formando raízes delicadas.

30% - 70% (O Crescimento): A linha sobe suavemente, desenhando o tronco curvo e os galhos (formato da Logo). O traço é orgânico, como um desenho feito à mão sendo revelado.

70% - 90% (O Florescer): Pequenas "bolinhas" (as folhas) surgem com um efeito de Pop elástico (suave, não agressivo) nas cores da marca (Salmão, Rosa, Lilás).

100% (A Vida): A árvore completa dá uma leve "pulsada" (escala aumenta 5% e volta), simulando um batimento cardíaco.

A Saída: A árvore não desaparece bruscamente. Ela se dissolve (Fade Out) enquanto a Página Inicial aparece suavemente por trás dela.

2. A Física Global (O "Chão" do Site)
A. Rolagem com Inércia (Liquid Scroll)
Tecnologia: Biblioteca Lenis Scroll (ou similar).

Sensação: O site tem "peso". Ao girar a rodinha do mouse, a página desliza e demora alguns milissegundos para parar totalmente após o usuário soltar.

Configuração de Física:

Damping (Amortecimento): 0.1 (suave e pesado).

Duration: 1.2s (tempo para parar).

B. Barra de Rolagem (Custom Scrollbar)
Visual: Uma pílula fina e flutuante à direita.

Cor: Marrom Café com 30% de opacidade (repouso) e 80% (ativo/hover).

Comportamento: Ela não toca as bordas da tela. É um elemento flutuante.

C. Cursor e Magnetismo
Botões Principais (CTAs): Possuem efeito magnético.

Ação: Ao aproximar o mouse do botão, o botão se move levemente (coordenadas X/Y) em direção ao cursor, como se fosse um ímã atraindo o clique.

Significado: "Estamos ansiosos para te receber."

3. Transições de Página: "O Portal Cromático"
Não haverá "tela branca" entre uma página e outra. O site funciona como uma SPA (Single Page Application).

A Lógica da Transição
Quando o usuário clica para mudar de serviço, uma Onda Orgânica (formato de curva/líquido) sobe da parte inferior da tela, cobre tudo, e desce revelando a nova página.

Personalização por Destino (Color Coding)
A cor da onda muda dependendo de para onde o usuário está indo, preparando o cérebro dele para o novo ambiente:

Indo para "Criança":

Cor da Onda: Salmão Suave.

Velocidade: Média-Rápida (0.6s). Transição energética.

Indo para "Individual":

Cor da Onda: Rosa Queimado.

Velocidade: Lenta (0.8s). Transição calma, convida a respirar.

Indo para "Casal":

Cor da Onda: Lilás/Verde Pálido.

Velocidade: Suave e equilibrada (0.7s).

4. Comportamento e Animação por Página
Aqui definimos como os elementos "entram" em cena quando a página carrega.

A. Home (O Hub)
Vibe: Boas-vindas, Clareza.

Animação de Entrada: Staggered Fade Up.

O Título aparece primeiro, depois o subtítulo, depois os 3 Cards de serviço. Um após o outro com 0.1s de atraso.

Eles vêm de baixo para cima (translate-y: 20px -> 0) com opacidade de 0 a 100%.

B. Página Criança (Psicopedagogia)
Vibe: Lúdico Sofisticado, Descoberta.

Fundo (Aurora): As manchas de luz Salmão ao fundo se movem um pouco mais rápido, simulando brincadeira.

Animação de Elementos: Elastic Bounce.

Ao rolar a página, as fotos e textos entram com um leve efeito de "mola" no final do movimento. Dá a sensação de vitalidade e alegria, sem ser bobo.

C. Página Individual (Terapia Adulto)
Vibe: Introspecção, Fluidez, Calma.

Fundo (Aurora): As manchas Rosa Queimado se movem muito lentamente, quase imperceptíveis, como uma respiração profunda.

Animação de Elementos: Slow Blur Reveal.

Os textos não apenas sobem, eles vêm de um "desfoque" para o "foco" (blur(10px) -> blur(0)).

Isso visualiza o conceito de terapia: "Trazer clareza para o que está confuso".

D. Página Casal (Sistêmica)
Vibe: Conexão, Encontro, Construção.

Fundo (Aurora): Duas cores (Lilás e Verde) que orbitam suavemente e se misturam no centro.

Animação de Elementos: Converging Slide.

Os elementos visuais (fotos, ícones) entram suavemente pelas laterais (esquerda e direita) em direção ao centro, sugerindo a ideia de "encontro" e diálogo.

5. Micro-Interações de Feedback
O site deve responder a cada ação do usuário.

Links de Texto: Ao passar o mouse, não aparece um sublinhado reto. Aparece um traço desenhado à mão (SVG animado) abaixo da palavra.

Formulário de Contato:

Ao clicar no campo para digitar, a borda do campo "acende" suavemente na cor do serviço daquela página.

Ao enviar com sucesso, o botão se transforma em um "Check" verde com uma pequena celebração (confete discreto ou brilho).

Resumo para o Desenvolvedor (Stack Sugerida)
Core: Next.js (React).

Motion: Framer Motion (Indispensável para as transições de página complexas e animações de entrada).

Smooth Scroll: Lenis (Melhor performance atual).

Stores/State: Zustand (Para gerenciar o estado do "Preloader" e saber se ele já rodou, para não repetir toda vez que o usuário volta pra Home).