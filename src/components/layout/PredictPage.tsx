import { useState } from "react";
//import { useLang } from "../../context/LangContext";

type Form = {
  age: number;
  isScholarship: boolean;
  isDebtor: boolean;
  totalSem1: number;
  passedSem1: number;
  gpaSem1: number;
  totalSem2: number;
  passedSem2: number;
  gpaSem2: number;
}

const initForm: Form = {
  age: 17,
  isScholarship: false,
  isDebtor: true,
  totalSem1: 8,
  passedSem1: 8,
  gpaSem1: 3.5,
  totalSem2: 8,
  passedSem2: 8,
  gpaSem2: 3.5
}

function PredictPage() {
  const [form, setForm] = useState<Form>(initForm);

  const update = (key: keyof Form, value: any) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  return (
    <main className=" mt-[100px] mb-14">
      <section className="w-full flex flex-col items-center mx-auto space-y-10">
        {/* hero */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">
            Prediksi Resiko Drop Out
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Masukkan data akademik dua semester terakhir untuk memprediksi tingkat risiko DO.
            (Untuk mahasiswa semester 1, cukup isi dua semester dengan nilai yang sama)
          </p>
        </div>

        {/* main card */}
        <section className="w-full max-w-4xl flex flex-col lg:flex-row gap-3">
          {/* input card */}
          <article className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6 space-y-6">
            {/* age */}
            <div>
              <label className="block font-semibold mb-1">Usia</label>
              <input
                type="number"
                min={17}
                max={25}
                value={form.age}
                onChange={e => update("age", Number(e.target.value))}
                className="w-full border rounded px-3 py-2 bg-white"
              />
            </div>

            {/* Semester 1 Card */}
            <div className="border rounded-lg p-4 space-y-4 bg-gray-50">
              <h2 className="font-semibold text-lg">Semester 1</h2>

              <div>
                <label className="block mb-1">Jumlah Mata Kuliah</label>
                <input
                  type="number"
                  min={0}
                  max={8}
                  value={form.totalSem1}
                  onChange={e => update("totalSem1", Number(e.target.value))}
                  className="w-full border rounded px-3 py-2 bg-white"
                />
              </div>

              <div>
                <label className="block mb-1">Mata Kuliah Lulus</label>
                <input
                  type="number"
                  min={0}
                  max={form.totalSem1}
                  value={form.passedSem1}
                  onChange={e => update("passedSem1", Number(e.target.value))}
                  className="w-full border rounded px-3 py-2 bg-white"
                />
              </div>

              <div>
                <label className="block mb-1">IP Semester</label>
                <input
                  type="number"
                  step={0.01}
                  min={0}
                  max={4}
                  value={form.gpaSem1}
                  onChange={e => update("gpaSem1", Number(e.target.value))}
                  className="w-full border rounded px-3 py-2 bg-white"
                />
              </div>
            </div>

            {/* Semester 2 Card */}
            <div className="border rounded-lg p-4 space-y-4 bg-gray-50">
              <h2 className="font-semibold text-lg">Semester 2</h2>

              <div>
                <label className="block mb-1">Jumlah Mata Kuliah</label>
                <input
                  type="number"
                  min={0}
                  max={8}
                  value={form.totalSem2}
                  onChange={e => update("totalSem2", Number(e.target.value))}
                  className="w-full border rounded px-3 py-2 bg-white"
                />
              </div>

              <div>
                <label className="block mb-1">Mata Kuliah Lulus</label>
                <input
                  type="number"
                  min={0}
                  max={form.totalSem2}
                  value={form.passedSem2}
                  onChange={e => update("passedSem2", Number(e.target.value))}
                  className="w-full border rounded px-3 py-2 bg-white"
                />
              </div>

              <div>
                <label className="block mb-1">IP Semester</label>
                <input
                  type="number"
                  step={0.01}
                  min={0}
                  max={4}
                  value={form.gpaSem2}
                  onChange={e => update("gpaSem2", Number(e.target.value))}
                  className="w-full border rounded px-3 py-2 bg-white"
                />
              </div>
            </div>

            {/* Scholarship + Debtor */}
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.isScholarship}
                  onChange={e => update("isScholarship", e.target.checked)}
                />
                Penerima Beasiswa
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.isDebtor}
                  onChange={e => update("isDebtor", e.target.checked)}
                />
                Tanggungan UKT
              </label>
            </div>

            {/* Submit */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
              Prediksi!
            </button>
          </article>

          {/* result card */}
          <article className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
            <p className="uppercase font-semibold tracking-wide">Hasil Prediksi</p>
          </article>
        </section>
      </section>
    </main>
  );
}

export default PredictPage;
