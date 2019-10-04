# ryugi_classtofc

題：Reactの流儀のサンプルコードを分割し、usestateを使用して関数のみで作成してみた。

【ざっくりと解説】

※前提条件としてReactの流儀のソースコードを読んでいてstate管理の概念を多少なりとも理解していること

<Reactの流儀>
https://ja.reactjs.org/docs/thinking-in-react.html

---state管理ついて----

template配下(アトミックデザインで言うところのtemplateの概念とは少し異なる。)のFilterableProductTable.jsxにstateを持たせた。子要素にはそのstate変更用の関数をpropsとして渡している。
organisms配下のSearchBar.jsxがOnchangeの際に画面から受け取ったvalue要素、checked要素を親(FilterableProductTable.jsx)からpropsで渡されたstate関数を使用（経由）して親のpropsを変更している。それによってorganisms配下のProductTable.jsxに渡るpropsが変わるので、商品がフィルタされる仕組み。
※移植に力を入れたので細かい動作の認識が間違っていたらすみません。

---propsの流れについて----

Pasges配下のProductPagesjsxの同階層にあるPRODUCTSjsxのデータを子要素へ渡している。当データの流れを追うことでpropsを子に流す感覚の理解が深まると思う。


以上、とにかく早く共有することを目的にした解説だったので駄文ですみません。随時追記修正を加える予定です。
