import { mergeStyles } from "@fluentui/merge-styles";

// Large progress Bar Class
export function ProgressBar() {

    const percentComplete = 0.1;

    const progressContainerClass = mergeStyles({
        height: 10,
        width: 600,
        background: '#eaeaea',
        borderRadius: 2,
        margin: '0 auto',
    });

    const progressBarClass = mergeStyles({
        height: 10,
        width: `${percentComplete * 100}%`,
        background: '#0078d4',
        borderRadius: 2,
        textAlign: 'center',
        transition: 'width 0.2s ease-in',
    });

    return (
        <div className={progressContainerClass}>
            <div className={progressBarClass}></div>
        </div>
    );
};