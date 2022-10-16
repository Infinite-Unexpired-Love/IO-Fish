import type { Course } from '.';

export const responsive: Course[] = [
    {
        title: '响应式设计与无障碍',
        paragraphs: [
            {
                lines: [
                    '响应式设计 (Responsive Design) 涉及为不同的设备设计交互方式。具体来说，影响设计的因素包括屏幕大小、比例、像素密度、输入方式、使用场景等。',
                    '无障碍设计 (Accessibility, aka. a11y） 涉及为不同的用户设计交互方式。具体来说，影响设计的因素包括视力、听力、肢体、认知等。',
                ],
                links: [
                    {
                        name: 'MDN Docs on Responsive Design',
                        source: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design',
                    },
                ],
            },
        ],
        subsections: [
            {
                title: '针对不同的屏幕规格进行优化',
                paragraphs: [
                    {
                        lines: [
                            '在早期的网页设计中，设计师和开发者们通常会固定页面和元素的大小，或者不考虑屏幕的尺寸；甚至使用预制的图片来达到显示自定义字体、特效的效果。',
                            '这种设计方式会导致在不同尺寸的屏幕上查看时出现糟糕的使用体验。在过小的屏幕上出现溢出的水平/垂直滚动条，在过大的屏幕上出现无意义的页面空白或者过宽的文字段落。这一问题进入到移动端后更被凸显出来，因为移动端的屏幕尺寸更加多样化。',
                            '依赖图片的设计不仅会进一步降低对不同尺寸的适配能力，还会导致在更高的像素密度的屏幕上出现模糊问题。',
                            '为了解决这一问题，业界内产生了响应式网页设计的理念，意在在同一个页面内对不同的屏幕规格进行优化。',
                        ],
                    },
                    {
                        lines: [
                            '通常来说，实现响应式设计的方式有两种：按比例设置可变的布局网格，以及设置多个不同布局。当然，在很多情况下，两种方式是结合使用的。',
                        ],
                    },
                ],
            },
            {
                title: '不同的输入方式',
                paragraphs: [
                    {
                        lines: [
                            '当今最常见的输入方式是触摸屏和鼠标键盘。触摸屏的精度比较低，因此需要更大的点击区域；而鼠标键盘的精度比较高，因此可以增大信息密度和减少操作层级。',
                            '除此之外，还有更多的输入方式，例如体感、语音、游戏控制器和无障碍设备。如果要发挥这些设备的最大价值，设计专用的交互方式是必要的。',
                        ],
                    },
                ],
            },
            {
                title: '无障碍设计',
                paragraphs: [
                    {
                        lines: [
                            '当我们进行谈论无障碍时，我们在谈论什么？',
                            '无障碍并不等同于为“残障人士”设计，而是在于使人机接口在任何情况下都更加易于使用。这包括使用场景、用户的暂时状况、文化背景等等。',
                        ],
                    },
                ],
            },
            {
                title: '适用的场景',
                paragraphs: [
                    {
                        lines: [
                            '行动受限的人群，包括永久性的残疾和暂时行动受限（比如受伤）。',
                            '正在进行一些特别的活动（比如驾驶）。',
                            '在不常见的环境中（比如在夜晚、烈日、太空或者在噪音环境中）。',
                            '不同的文化习俗（比如书写方向，复数变形，符号、颜色代表的含义不同）。',
                        ],
                    },
                ],
            },
            {
                title: '常见的无障碍设计',
                paragraphs: [
                    {
                        lines: [
                            '在你的手机操作系统中，就存在了当今几乎所有的无障碍设计；但是前沿的设计不止于此。下面是一些我比较欣赏的典型案例。',
                        ],
                        links: [
                            {
                                name: 'Xbox 无障碍控制器',
                                source: 'https://www.microsoft.com/accessibility/xbox',
                            },
                        ],
                    },
                ],
            },
        ],
    },
];
