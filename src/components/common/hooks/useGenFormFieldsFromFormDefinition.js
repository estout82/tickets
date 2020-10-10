
export default function useGenFormFieldsFromFormDefinition(formDef) {
    const doGenerate = () => {
        if (formDef && formDef.fields) {
            let r = {};

            formDef.fields.forEach(elem => {
                r[elem.name] = elem;
            });

            return r;
        }
    }

    return {
        do: doGenerate
    }
}