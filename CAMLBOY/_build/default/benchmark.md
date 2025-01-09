# Benchmark

## Environment

- CPU: `Intel(R) Core(TM) i7-8665U CPU @ 1.90GHz`
- OS: `Ubuntu 20.04.2`
- Browser: `Google Chrome Version 95.0.4638.69`

## Command

### OCaml 4.13.1

```sh
opam switch create . ocaml-base-compiler.4.13.1
opam exec -- dune build --profile=release
opam exec -- dune exec -- bin/sdl2/bench.exe resource/games/tobu.gb --frames 1500

```

### OCaml 4.13.1 + Flambda

```sh
opam switch create . --package=ocaml-variants.4.13.1+options,ocaml-option-flambda
opam exec -- dune build --profile=release
opam exec -- dune exec -- bin/sdl2/bench.exe resource/games/tobu.gb --frames 1500

```

### js_of_ocaml 4.1.0

```sh
opam switch create . ocaml-base-compiler.4.13.1
opam exec -- dune build
python -m http.server 8000 --directory _build/default/bin/web
xdg-open http://localhost:8000/bench.html?frames=1500&rom_path=./tobu.gb

```
