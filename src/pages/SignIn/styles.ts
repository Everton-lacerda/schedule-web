import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;

    width: 100%;
    max-width: 700px;
    
    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;

        h1 {
            margin-bottom: 24px;
        }

        input {
            background: #fff;
            border-radius: 10px;
            border: 1px solid #ced4da;
            padding: 16px;
            width: 100%;

            & + input {
                margin-top: 16px
            }
        }

        button {
            background: #16384E;
            height: 56px;
            color: #fff;
            border-radius: 10px;
            border: 0;
            padding: 0 16px;
            width: 100%;
            margin-top: 16px;
            transition: background-color 0.2s;

            &:hover {
                background: ${shade(0.2, '#16384E')}
            }
        }

        > a {
            color: #132129;
            display: block;
            margin-top: 24px;
            text-decoration:none;
            transition: color 0.2s;

            
            &:hover {
                color: ${shade(0.9, '#16384E')};
                font-weight: 500;
            }
        }
    }
    > a {
            color: #132129;
            display: block;
            margin-top: 24px;
            text-decoration:none;
            transition: color 0.2s;
            display: flex;
            align-items: center;
            svg {
                margin-right: 15px;
            }

            
            &:hover {
                color: ${shade(0.9, '#16384E')};
                font-weight: 500;
            }
        }
`;

export const Background = styled.div`
    flex: 1;
    background-color: #102B3D;
`;