/* eslint-disable unicorn/consistent-function-scoping */
export const useProfiler = (id: string) => {
    const onRender = (
        id: string,
        phase: 'mount' | 'update',
        actualDuration: number,
        baseDuration: number,
        startTime: number,
        commitTime: number,
        interactions: Set<unknown>
    ) => {
        console.table({
            id,
            phase,
            actualDuration,
            baseDuration,
            startTime,
            commitTime,
            interactions: interactions,
        })
    }

    return { id, onRender }
}

export default useProfiler
