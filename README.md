<h2>Funcionalidades</h2>
<ul>
<li><strong>Menu responsivo</strong>: Inclui menus para dispositivos móveis e desktop.</li>
<li><strong>Carrinho de compras</strong>: Adicione, remova e veja o total de itens no carrinho.</li>
<li><strong>Pagamento via PIX</strong>: Gere um QR Code para facilitar o pagamento.</li>
<li><strong>Banners promocionais</strong>: Destaque de promoções e conteúdos personalizados.</li>
<li><strong>Seções de produtos e atletas</strong>: Exibição dinâmica dos produtos e destaques.</li>
<li><strong>Consentimento de cookies</strong>: Integração para conformidade com as políticas de cookies.</li>
</ul>
</section>

<section>
<h2>Estrutura do Projeto</h2>
<ul>
<li><strong>`components`</strong>: Contém os componentes reutilizáveis como menus, seções de produtos e banners.</li>
<li><strong>`data`</strong>: Contém os dados dos produtos exibidos no site.</li>
<li><strong>`hooks`</strong>: Inclui hooks personalizados, como o consentimento de cookies.</li>
<li><strong>`services`</strong>: Serviços externos, como envio de confirmação de pedido por e-mail.</li>
<li><strong>`types`</strong>: Definição de tipos do TypeScript, como o tipo <code>Product</code>.</li>
</ul>
</section>

<section>
<h2>Tecnologias Utilizadas</h2>
<ul>
<li><strong>React</strong>: Biblioteca principal para construção da interface.</li>
<li><strong>TypeScript</strong>: Garantia de tipos estáticos para maior confiabilidade.</li>
<li><strong>react-hot-toast</strong>: Notificações toast para feedback ao usuário.</li>
<li><strong>Lucide-react</strong>: Ícones modernos para a interface.</li>
<li><strong>CSS Tailwind</strong>: Estilização responsiva e customizada.</li>
</ul>
</section>

<section>
<h2>Instalação e Execução</h2>
<ol>
<li>Clone o repositório:
<pre><code>git clone https://github.com/seu-usuario/luxe-ecommerce.git
cd luxe-ecommerce</code></pre>
</li>
<li>Instale as dependências:
<pre><code>npm install</code></pre>
</li>
<li>Execute o projeto:
<pre><code>npm start</code></pre>
</li>
<li>Acesse o aplicativo no navegador:
<pre><code>http://localhost:3000</code></pre>
</li>
</ol>
</section>

<section>
<h2>Estrutura do Código Principal</h2>
<p>O código principal do aplicativo está no arquivo <code>App.tsx</code>. Ele gerencia o estado global, como itens do carrinho, abertura/fechamento do menu, e controle do consentimento de cookies. O fluxo principal inclui:</p>
<ul>
<li>Cabeçalho fixo: Inclui a barra de pesquisa, menu de navegação e ícone do carrinho.</li>
<li>Seções principais: Banners promocionais, seções de produtos e destaques de atletas.</li>
<li>Carrinho de compras: Sidebar interativa para exibir e gerenciar itens.</li>
<li>Pagamento via QR Code: Interface para finalizar compras com PIX.</li>
<li>Footer: Rodapé com informações adicionais.</li>
</ul>
</section>

<section>
<h2>Como Contribuir</h2>
<ol>
<li>Faça um fork do projeto.</li>
<li>Crie uma branch para suas alterações:
<pre><code>git checkout -b feature/nova-funcionalidade</code></pre>
</li>
<li>Commit suas alterações:
<pre><code>git commit -m "Adiciona nova funcionalidade"</code></pre>
</li>
<li>Envie para sua branch:
<pre><code>git push origin feature/nova-funcionalidade</code></pre>
</li>
<li>Abra um Pull Request.</li>
</ol>
</section>

<section>
<h2>Licença</h2>
<p>Este projeto está sob a licença MIT.</p>
</section>
</main>

<footer>
<h2>Contato</h2>
<p>Desenvolvedor: Edson Bruno</p>
<p>E-mail: edsonbruno@exemplo.com</p>
<p>LinkedIn: <a href="https://linkedin.com/in/edsonbrun" target="_blank">linkedin.com/in/edsonbrun</a></p>
</footer>
