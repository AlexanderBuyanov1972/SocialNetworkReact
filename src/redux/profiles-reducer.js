import {getUserById} from '../api/api';
const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const SET_PROFILE = 'SET_PROFILE';

let initialState = {
    posts: [
        { countLikes: '1', message: 'post1', id: '1', http: 'https://s.yimg.com/ny/api/res/1.2/i4kpzp4ejlsUL1kEfzQGEg--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://img.huffingtonpost.com/asset/5cd29f66200000590016e7b8.jpeg' },
        { countLikes: '2', message: 'post2', id: '2', http: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBUSEhIVFRUWFhcYFxcVFRUVGBUXFxUXFhcYFxgYHSggGholGxYVITEhJSkrLi4uFx8zODMtNygtLi0BCgoKDg0OGxAQGy4mICUxLSsvLS8tLS0tMC0tLTAtLS0tKy0tLS0tLS0tLi0rLS0tLS0vLS0rLSstLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwECBQYIBAP/xABJEAABAwICBgYHBQUFBwUAAAABAAIDBBEFIQYHEjFBURMiYXGBkTJCUqGxwdEjM2JykggUFYLhQ1NUk6IXY6OywtLwJCVEZHP/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEBQEG/8QALhEAAgIBAwMCBAYDAQAAAAAAAAECAxEEEiETMUFRYQUUInFCUpGhsfAygdEj/9oADAMBAAIRAxEAPwCcUREAREQBERAEREARFR7gBckAduSAqi1LGdZWFUlw+rje4erF9qb8upcA95WoYhr5o2/c080nadlgQEuIoHqtf0n9nRt/mefkF5Dr9q/8JD+pyA6DRc+DX5V/4WH9Tl6abX9N69Gz+V5+YQE9IofoNfdK772mlZ2tLXLbMH1qYTU2AqmxOPCYGL/U7q+9Aboishma8BzHBwO4tIIPcQr0AREQBERAEREAREQBERAEREAREQBERAFZLI1jS5xDQBckmwA7SvJjOLQ0cLp53hkbBck/ADiTyXNGsXWZUYo50cZMVLfKMb3jnIRv7tyAkrTXXZT05dFQt6eQZGQ5RNPZxf8ADtUM4/pfX4k600z3g7o2XDe7Ybv8brOaFar6muAlmJggO4kdd4/A3gO0qbtG9DqOiaBTwN2uL3dZ57S4qmd8YvC5ZbGpvlkAYNq4xKqsW05Y0+tKRGPI5nwC3HD9R0pAM9Wxp4tjY5/k5xHwU6MpuZ8l92xMHDzUN1kvYltgvciGn1J0Q9KeZ36R8AvaNTeG/wC+/WVKoI5BV2wvdsvzHmY/lIp/2OYbym/WV5KjUpQu9GaZni0/EKYdtUJHIJtl+YZj+UgWv1GuzMFYOwSRkebmn5LUMY1XYnTXPQiVo9aFwf7jZ3uXUro2Hgvi+mHA+a83WR9z3bB+xyRhOP12GyfYyywkHNhuAe9hyUu6G68mOLYsQj2Du6aMXb3vZvHeLrfcf0ZpqxpbUwMf+K1nDtDhmCoX001STUwdLRkzRDMsP3jR2e2B5qUb03h8MjKprlcnR1FWRzxtkie17HC7XNIII7wvuuSdBtO6rCJeoS6In7SF248yPZcundFdJafEqds9O64PpNPpMdxa4c1eVGZREQBERAEREAREQBERAEREAWN0gxyChgdPUPDGNHiTwDRxJ5L64zikVJA+eZwbGwXJPwHMlcp6wNNJsWqS912xNJEUV8mjmebjxKA9WsnWBLi8wyMdOz7uO977+u/m4+5bfqt1bizaytZvsYonDye8fALF6qNBhPJ+9VDbsjPVadzn78+dslOcY8liv1H4Ymqmn8Uj7Qx+A4BelrrLzhyrtKmMki2SyenbTbXn2lXaU+oR2H321XbXn2lXaXu882H321TbXx2lTaTeNp99tNtfDaVNpedQ92H3L155GcQm0qbShKSfclFYIv1m6uW1TXVNK0NnFy5gyEo7OT/ior0J0uqMIqukjBLb7MsTrgPG4g8nDn2Lp6Tmoi1u6ENdetgbZ39qBuPAO+V1ZRqMPbIrtpz9USYNENK6fFIBNTu7HsPpRu5OHzWdXG+i2kdRhdU2eEkOabPYb7L28WuHz4Lq/RLSSHEqVlRCcjk5vFjuLSt5kMyiIgCIiAIiIAiIgCItT1oaTDDcNllBtI/7OL87wc/AAu8EBDevTTQ1dT+5xO+wgPWsfvJeJPMN3DtJ8NP0VwZ00jDa5cQGDv4rD0MBmlsSTc3cTmTzJKmLVjhgdM6UjqxNs38zvoPis2pt2RL6K9zJEwigbTQshZuaPM8T5rItK+LF9AuUn5Og0fQFXAr5hXBWJkGi8FVurArgppkS5FRF6eFUuqIgF1QlFaV42elSVaShVpUGySQJXmqoWyMdG8Xa4EEcwV9yvm5VyZNI52040dMEz2gdZh/UzeD32X11S6ZOwytaHO/9PMQyVvAX9GQdoPuJUi60MOu2OoA3HYd3HNvvuPFQljVJ0cmW52Y+a6elt3RwzBfXteTtFjw4Ag3BFweYKuUcajdKP33D+hkdeamIY6+9zDcxu8gW/wAvapHWszhERAEREAREQBc8/tE42ZKyKkB6sLNpw/G/6Ae9dCuNhdcc6aYkavEamb25nW/KDst9wCA++jlPZhed7sh3D+qnPQOi6KiYbZyXefHd7gFEWH02TIxxs3zyU80EQYxrRua0DyFlyNXPLx6nS08cI9bVeFaFcFQi1lwVwVArgrEQZUKoQK4KaRFlFVVRSwRyUVFcqJgFpVCryrSoskiwq0q8q0qDJIsKsKvKtKrZNGH0kounpZY+JaSO8Zj3hQJjlPtxE8W5j5royYKD8epOjqJY+Ae7yJv81bpZ4k0QvjlHx1IY2aXFWMJsycGN3K+9p8x711EuKIJnU9Q17fSjkDh3tdcfBdnYZViaGOUZh7GuH8wBXZOWelERAEREAREQGK0rregoamW9tiGQ+Oybe9cd4ezamYDxd/VdT64Kno8Fqz7TGs/W9rfmuX8BbedvYCfcoyeIs9j3RtkchaQ4bwbjvGanTC5duJr/AGmtPmFBBU6YEzZp4gfYb8AuPeuUdOryZAK8K0K4KCJMvCuCtCuCsRBlwVQqBXBWIiyoVUCqFIiUVCrlaUBaVQq4q0qDJIsKoVcVaVBkkWFWFXlWlVsmj4T7r8lBuLVBlnkeeL3eV7D3KcqgXae5QPVNtI8cnOHvKlQvqZ5b2Rp+OstO7tsfcuotUNd02DUpvctYWH+Rxb8AFzLpK37Rp5t+BU+/s9VO3hJb/dzyDzDXf9S7FbzFHMn/AJMk5ERTIhERAERWTSBjS47mgk9wF0BEX7QGlkTKX+HN60spY9+eUbGuDhftJaoY0TopJZndHG5+ywk7LSbbt9lZjmISYlXvlzLp5eqDwBNmDwFl0borgUVBTMhjaLgDbdxe62ZKzam5Qjj1L6K3J59CFo23cBzIHvU8ULbRtHYPgox0xwsQ4i3ZFmyFrwO3asfeFKNOOqO5c26WWjdWsJn3CuCsCvCij1l4VwVgVwViIMvCuCsCuU0RZcFVWqt1IiVVCl1QpkFCqFVVpUWSRQq0qpVpUGSRaVYVeVYVWyaPnJuKg3GmbNTKP94743U5vUUjDRUYuYiMjIXO/KBcr2l4k/sLFmKI90soZGCKR0bg1wNnFpAOY3FSJ+z3pXFC6Sgl6rpn9JG6+RdshpYe2zQR4qSsTwyKpgdBKwFhFrW3ZZEciFzLilLJh1c5gNnwSXa7uN2nysulprlNbfQw31uLydmIsbo3iQq6OCoG6WJj+4uaCR53WSWozhERAFgdPJzHhda4ZEUs9jyJjcAfMrPLXNY0W3hFcP8A60p/Swu+SA5h1exB+KUrTu6QHyBPyXS20ubNXEmzilMfxkebXD5rozaXI+ISxNfY6WijmD+5qWn0QNRRu/G5p82EfNYfTOOqgmLhLJ0T822cQG825blmtOXdekPKb5BbY6Fkkey9oc0jMEXCzxsxtfs/5LpQzlEKmrm/vZP8x/1VW1sw/tpf8x/1Ug4jovSbeTXN49Vxt77gLwDCcPY4tdtuI3gudlfP1QF783XnB6tLY+xrEGO1bPRqJP1X+Ky9Hp1WR+k5sg/E35he+2FCXobHbAuReTIHdc8F7WYPh0m4Edz3j5qfXj3w/wBCHRknjJ6cL1iROsJ43R/ib12+I3j3rcKKujmbtRva8cwbrQJdEKZ/3U7geRLX/CxXhbgdXRu6SB97ewd/e070V0H5PHXJeCVkWtaM6TioPRSjo5hw3B3dfcexbHdW5K8FyK26wmkekTKQWA25SOqwfE9iZGDL1NQyNu09waBxJsFqWK6wIIyRC10p5+i3zOZ8lrs9BW17tuU7I4B3VaO5q9cWh0DLdNOc+Ddlo7gXXuqnbBd2WKuT8GOrdPat/obEY7Bc+ZWHqNIKx/pVEngbfBbn/AsPZvBPfI75FeKVuFNlbCWkPcLtF5OtbkdxPYnXj4T/AEPelLtk011bOd80n+Y76q397m/vZP8AMf8AVbm/C8OLg0bbSTYdZ+/+a69dJotSbYBD3fmcbc+ACh85WTeksRrOjLauona1ssuyDd52nEBo37/JbFgEQ/jFQ7lGfMlg+F1t9JSRws2Y2Bo5AWWpYA7/ANzqj+Bo94XkrMtv2/4eKGEl7m6bSgDXJEG4o4j1o43eNiPkp42lBOuaXaxO3swxj/mPzVuglm3/AEV6yOKybtSU5fgdNfe3pW+Ankt7rDwW9LQNRcWzgcB9p0x/4z2/9K39do5YREQBefEaYTQyROFxIxzCOYc0tPxXoRAcX0jnUdY3aydDNZ3ex1j8CulIZw9ocNzgCO4i6hzXjo8aTE3StFo6gdIDw2tzx55+K23Vdj37zRiJzryQ9U8yz1T5ZeC5PxWt7FNeDofD5rc4PyZTTlt44X+xMw+BuPotvpzdg7lr+PUpmp3sG+1297cx8FmsIk2omHm0fBc2qe6KX3N9kcN/6NgwCMdG4kb3n3AD5KOMZNq+ovv6Tt3bLbbuyykbAHZSN5Pv4OaPmCtK1iYaYagVLR1JLBxtezwLC/eLeS6dle/Sxx4MVc9uoefJDWJYq6Cvqr+kZT+kej/pspq1Y6SUL8PG3LE2Rpd0geWg3vvz3iyjDS3Rn98ImhIEtrOB3Ptuz5jILT2aI1pdboSOFy5tvjuW2m2DguTJbXNTZvYxSKoxx7qY2itJbZyBaLWPde9u9bxo++SapEO1cFrjnmRYZZrSNFsBbQsc5zg6V46x4NA4D6qT9W2Gnr1TwesNiO/s3u4+JA8lz7K46jULC4N0LJUUPPc+lRgbS+0rc97XDJwtxBWWjBAAJvbjzX1xF95vyiy+V1BQVbcY9kw5OaUn3LiVhzgreku0bUjjcvdmfDkOwLLXVad+zK09tvNJRU8RfZiLceUanpQJKaWOMOsHMLibC9w62V1HWmNd0dZTucSQI3uFzcbVwL8r2Uv6yMOL4WTtFzETtceo7f5ED3qK9J8HFdCNk2lZcsJO/m0lSjTDT6lccB2yu07Xk2bVPjEFTUStlLNsNBjDrZ59Yi/HcsNrwq4I6umFOW9M1zXEMtkQ4WvbiVFc2D1sT7dDMHDixrj5Oatl0T0Wk6VtTVXGydprXHrOcPRLuQBzXUnZCMcnPhCUpYJCqH2ljtvErCO/bHBSrjUY6B2Qy2T5OBUZ6LURq61mXUjcJHnO3VN2jvvZSXjr/sdni5zWj9QJ9wK52nht082/Of4N18918EvGP5MG7ILTdGhesrJPxNb5XJ+IW41Rs09y1nR2nLI3PO+R7n+BPV91lzrJbYv+/wB7GuEdzRm9tc6ac1/7xiE7xmNvZHc3q/JTLpxjooqN77jbcCyMc3EfLeol1bYC7EMThiIJaHdJIfwtNzc9pt5rd8KrbzY/sZPiE0sQX3Om9A8N/dcMpYCLFkLdr8zhtO/1OKzyo1thYcFVdk5gREQBERAadrS0RGKULo2gdNH14T+IDNvc4Zd9lzNgWKzYbVh4BDmEtkYcri9nNPl7l2Uow1o6q2YiTU02zHU26wOTZbDK/J3aoyipJxfZnsZOLyj5aP6QQVsYfC8E8W36zewhbBQEDIbguXQJKSos4Fr4pMxfi12Y9y6VwerEsbJGm4e0OHiLr5/U6T5aacXwzs0ajrxaa5Rn4JuikEnqkbLu7gfArN1dKyaMse0OY4Zg8Vgad4IsV6aWpdDkQXR8LZlv1C3aa9RWH2f7GW+py5Xdfuafi+gM8bi6mcHs4NcbOHG19xWIbo3iG7oHeY+qlynq2SC7XA/HxC+11p+WqlzFlHXsjw0R5gmgD3OD6twte/RtN7/mP0W+SvbDHkAABZrRl3AKyfEGNyB2jybn58liauoLus7huHAf1UZ2V0xah3JRhO2Sc+xYDmSd5zKrdfKPmr7rmqRtaLrq1+aXVr80bCRnKOYSx2cATazgeP8AQrRNINBJGOMlJ1mnPoybEcw08R2LYqWYizmmzhl2HsKy8GItOTuq7t3HuK6ELK7oqNncyThOqTcCIJKOrYdl0Et/ynt5L3YbonW1JG0zom8XP7rGzd5UuhwPFfOaoYwXc4DvKn8rBct8EPmJvhLk8WA4LFRxdHGO1zjvceZXjr5+lky9FlwO1x3+W5fWqrnSjZju1p3uORI/Dy715JSGNsMlTqLouO2PZFtNTT3S7s8dc7IrBYrikNLHtyvaxoGVzmewDisrWSWGfDMrmrSavNVWSyC52pCG917C3kudRpvmbHl4SNlt/QgsLlns000lfiNRtZiNvVjZyHEntKnfUloWcPpDPM209QASDvZGM2t7zvPhyWE1W6oxA5lZXbLnizo4hm1p3hz+Z3ZKZV9BXCMIqMeyONObnJyfcIiKZEIiIAiIgCIiA5Y114R+7YvKQLNmDZW8jtZG3iCtu1S410lMIXHrR7u1v/nxWd/aI0fM1JFWMbd0Di19t/RyWz8HAfqKhjQzFXU1QC024jt5jxCyaynq1NeVyjRpbenYmdJNcvXFVc1g8ExJlREHsPeOIPEFZEFcOE5ROtKCke93RuzIF1RzY+/xJXiBV11d1s+EV9PHlnpMoGTRZfJ2e9WXWGxfSmmpsnP2n+wzrHx4DxXmXPgYUeS/FKCoDukgm3b435td9CvbR15LR0jdl3Eb81o1brFefuogBzcbn3LDT6YVbjcFo7A1SdFngK6D4kSrPXAA7I2jwG5YuhpKqSTpZpdht8o2bv5jxUeRaXVgNy5p7CxZej1iSj7yJrh+ElpRUWfiDurXESSGCwsvs2bgRdaxhOmNLUEN2jG8+q/K/c7cs/dRy4DiR6Wtj7u4kK4NibnYX814yVaSver7IdP3Z7JavkvG911QleXEKtsMbnvNmgZlUzscu5ZGCRq2sfGxTUj7HrvBaO7ifl4qIdAMJNZiVNDa4MgLvyt6zifAL3awMcNTLvy4Dk0bh81vf7OWj5Ms9c9uTW9FGT7TrOeR3ANF/wARXa0NHSr57vk5ert3z47InhosLDgqoi2mUIiIAiIgCIiAIiIDyYth7KmCSCQXZIwtd3EWXHukeDyYfWSU78nRPyPtN3tcO8WXZqirXloMa2AVkDbzQt67QM5I9/6m5nuugI40S0kdCRIzNpyeznz8VLeFYrFUsD43X5ji08iFzXhdcYX5+id4+a3PDsQfE4SRPIPMHIjt5rlarSpvKOhRqGlhk4AqoKj6i1gODbSw7R5tda/gQvNi+nMkrSyJnRg5E3u7w5LCtPZnGDW7oYPbplpY7adTwOsBk943k8WtPzWH0b0VkrPtHO2I7+lvc7ns/UrXSpT0JxWOWmZGCA9gsW8e8c1pszVD6SiH/pL6j1UGidJFb7PbPN/W/ovTUzUtPkWsB4NDQT5Beivlc2M7Au82a38ziACewXv4KzDMOjg61uklPpSPFyT+EHcFk3OSy2aVGK8GPkxSA76V5bz6IEL5jB6CsaS2Ntxkdm7HNPaOC2Q1L/aK8z4Wl4ksNrdcZEjkeaKaXZsOKfgjjSTQ19O0yROL4xvB9Jvb2hV0S0sfA5sUzi6ImwJzLL9vsrdtIsVjp4HF5Fy0hreLiRbcodK11N2wxIzWJQl9JOwddUJUYYFpjLTtEb29IwbrmzgOQKydTrBuPs4LHm51wPABZpaezOEi9XQwbnXVscLC+Rwa0c/gOZUWaX6UGouc2wt3DieRPb2LxYpistQ7alfe24bg3uC0zGsR6Q7LfRB8z9Fs02k5yzNfqOMI+EUUlXUNYwbT5HBrR2k2AXXehuANw6iipm+o3rH2nnNx81FOoXQUg/xKobbIinaRnnkZD8B4nkpxXXOaEREAREQBERAEREAREQBUIuqogOf9cOrB0L311E28TutLE0Zxu4ubzaeXDPwizDMTdEbHNvLl2hdpOFxY5hQ1rG1Mtmc6pw+zHnN0Bya48TGfVPZu7l40msM9Ta5RHFPUNkbtNNx/5vX1WpVME9HKWSNfFI3e1wsfLiFkKTH+EjfFvzCyypa7GiNqfczqvhlcwhzSWkbiDYryQVsb/RcF6FU16lifobJQ6a1UYAcWyD8Yz8wspHrDPrU48H/ULR0VLorfgsVs15N5frDPq0/m/wCgWOrNOal+TAyMdgufM/RauiKiteD12zfk+tTUvldtSOLjzJuvki+M1UxnpOA8Val6FTfqfZWSyBou4gAc1iarHmjKMXPM5D+qxDpJah4aA57nGzWtBNz2AK6NLfcrlal2PVimLGTqsybx5n+i3TVRq1fiMjaioBbSsN7EWMxHqt5NvvPh2rYNXupd7y2oxHqsFiIB6Tv/ANDwHYM1O1PA2NgYxoa1oADQLAAbgAtMYqKwjO5NvLKwQtY0MaA1rQAAMgANwCvRFI8CIiAIiIAiIgCIiAIiIAiIgCIiAw2kei1HiDNiqga/k7c9va14zCiLSPUM4XdRVG0ODJsj3bQyPkp2RAch4zoBidJfpKSQgetGOkHf1bkDvWAFRLGbbTmkcCSLeC7bXirMIp5vvYIpPzxtd8QmBk43bi0w9fzAPyV/8bm9ofpC6pqNXWFP30MPg3Z/5SF4zqpwc/8Aw2/rk/7lHZH0JbpepzH/ABubmP0hWOxeY+v5Bv0XT/8Asowf/Bj9cn/cvVBq3wlm6hhP5gXfEpsj6DdL1OT31cj8i9x8SsxhGheI1Z+xpJnA+s5pY3v2nWB8F1lQ4FSwfdU0MdvZjYD5gLIAL1JIjkgDR7URO+zqydsQ9mPru8zkFLuiug9DhrbU8I2+Mj+vI7vcd3cLBbGi9AREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAf/9k=' },
        { countLikes: '3', message: 'post3', id: '3', http: 'https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/050_girl_avatar_profile_woman_suit_student_officer-512.png' },
        { countLikes: '4', message: 'post4', id: '4', http: 'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png' },
        { countLikes: '5', message: 'post5', id: '5', http: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/IL/en/999/EP0149-CUSA09988_00-AV00000000000002/1553528383000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000' },
    ],
    newPostText: '',
    profile: {}
};

const profilesReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            countLikes: '0', message: state.newPostText, id: '6',
            http: 'https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/050_girl_avatar_profile_woman_suit_student_officer-512.png'
        };
        if (newPost.message !== '') {
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
    } else if (action.type === UPDATE_POST_TEXT) {
        return {
            ...state,
            newPostText: action.newText
        };
    }
    else if (action.type === SET_PROFILE) {
        return {
            ...state,
            profile: action.profile
        };
    }
    return state;
}
export const createAddPostAction = () => {
    return { type: ADD_POST };
}

export const createPostTextAction = (text) => {
    return {
        type: UPDATE_POST_TEXT,
        newText: text
    };
}
export const setProfile = (profile) => {
    return {
        type: SET_PROFILE,
        profile
    };
}

export const getUserThunk = (userId) => {
    return (dispatch) => {
        getUserById(userId).then(
            data => {
                dispatch(setProfile(data));
            }
        );
    }
};
export default profilesReducer;