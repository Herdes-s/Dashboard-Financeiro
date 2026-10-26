const modal = document.querySelector<HTMLFormElement>("#modal");
const btnNew = document.querySelector<HTMLFormElement>("#btn-new");
const btnCancelar = document.querySelector<HTMLFormElement>("#btn-cancelar");
const form = document.querySelector<HTMLFormElement>("#from");

export function abrirModal(): void {
  modal?.showModal();
}

export function fecharModal(): void {
  modal?.close();
}

if (btnNew && modal) {
  btnNew.addEventListener("click", abrirModal);
}

if (btnCancelar) {
  btnCancelar.addEventListener("click", fecharModal);
}

if (form) {
  form.addEventListener("submit", (event: SubmitEvent) => {
    event.preventDefault();

    const formData = new FormData(form);
    const nome = formData.get("nome") as string;

    console.log(`Dados enviados: ${nome}`);

    fecharModal();
    form.reset();
  });
}
