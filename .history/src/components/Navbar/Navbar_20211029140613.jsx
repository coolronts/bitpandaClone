import {AiFillBank} from "react-icons/ai"
import { BsArrowDownUp } from 'react-icons/bs';
import {FiSend} from 'react-icons/fi'
import React from 'react';

export default function NavBar() {
  const styles = {
    body: "bg-white shadow flex justify-between px-24 py-5 font-semibold ",
    logo: "w-12",
    menu: "text-xl flex justify-between w-1/4 mr-24 ",
    thirdContainer: "w-full",
    buttonContainer: "flex",
    button: "bg-green-400 py-3 px-6 text-lg font-bold rounded flex justify-between",
    buttonSend:"ring-1 ring-green-400 py-3 px-6 text-lg font-bold rounded flex justify-between"
  }
  return (
    <div className={styles.body}>
      <img className={styles.logo} alt="logo" src="https://images.saymedia-content.com/.image/t_share/MTgyNzMyMzkxNDI3ODEwNjU2/bitpanda-exchange-and-the-best-token.png" />
      <div className={styles.menu}>
        <div>DashBoard</div>
        <div>Portfolio</div>
        <div>Prices</div>
      </div>
      <div className={styles.thirdParty}>
        <div className={styles.buttonContainer}>
          <button className={styles.button}> <BsArrowDownUp/>  Trade</button>
          <button className={styles.button}> <AiFillBank/>  Deposit</button>
        </div>
        <button className={styles.buttonSend}> <FiSend />  Send</button>
        <img className={styles.logo} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUSFRgSFBIYGBUZERgSHRwRGBgYGBIZGBgaGRgjGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMDw8PEQ8PEjEdFx0xMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAMgAyAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQYHAgUIAwT/xABBEAABAgMFBAgFAwIFAwUAAAABAhEAA1EEEiExYQVBUmIGByIyQnGBoRMUkaLBcoKxI+EzksLR8CQ0skNEU2OT/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAGBEBAQEBAQAAAAAAAAAAAAAAABEBQSH/2gAMAwEAAhEDEQA/ALbcu7dpmIomsDDCgLp1NIbF2ftM71FIT79xLAcJrAFde9yw3yO8YJ5hCrp3uaBvqcRyikAMMvC7k0VSBy7+JmblrA4zbB2Iqaw2Ls/aZ3qKQGI0yBdPMaQ6697lg/glk8prBXTvc0AOcDvAYDiFYGDM/Zd3oaQMcKkOOUUgcZ+F2aqqwDvF38TMRQVhUG4YjmNIGLt4mcmqaQPlQlk8prAD5697kgc4HeMBzCsFdO9zQ2yqcU8ogE258Hd3yNId4u/iZmoKwnGfhdiKqrAxdvEzvy0gDR8AXB4jSG+eve5YTjChLJ5TWCune5oACstMBzCsPR8Hd3yNIWODZnFPKIHDcrtrerAO8XfezNwisLR8sQX7xpBi+68zmhTSBxhR+zodYBvnrnj3ILxz3jAB++KxjXTvc3lGVKt2dBrAGj4O7vkaQQnH7XY1KqwoobDLwu4O8qpDqd7MrQQtbul2msF3XV+PSICmnd5vOCtCe1ynSBvf7IG9t3HrADl+ZmFCmsJgzeF3ffepDu7n1vcOkGraN/qgE5xfM4K5RWHTTu80IJ11fj0ht7/ZAFaEurlNIHLv4mZqprA2mWDcesF3c+t7h0gBhl4XcGqqQPnUhlcorC1bS7TWHd11fj0gCmnd5oK0OKuU0gb3y5ITe2Y49YBuXfxMwFU1gYZP2Xd6qpBdxZ8Wd+EUhatg7XaGsBk+/eQxHCKwqad3mgu7n1fj0gb3y5IA/JdWhpDcu7YszVFYxI9jjzaw7uLPizvQUggYZPg7vU0gf6nAjhFYWDO2Ds1DWHdzqA5PEKQUfjLngb6HEnhNIGy1y5ITZ0GBHEaxUZOXdsWZqisEK7iz4s78IpBEUYvzN6XYMMOF+z+qBtz4Z3qmkD72zwbhFYAO/wC7UaQUr4dBrB+MueBvfE8ukAYNyvjW9Hja7UiSkrmzEIAGKpiglIT5nB40/S3pLL2dJ+IoXpinRLQ7fEVxGiBmT+TFDbb25Ptq/iWiYVl+ynJEsUQjIfzAzF0WnrH2cg3ROUtsR8KWtQfzIAMeli6wtnTTd+ZuFWfxkLQD5KZh9YoKCCx1LKmJWApKkqcOkpIKVJ8xgYywblfGt6OdOjPSi0bPW8pboJdUtRNxY04DqPeLr2f0xskyzIta5yJaVAgomrSFpWnMEDMjQUgkSHF+ZsaXYMMOF+z+rWILb+tCwy+yj4s4u96Wi4k6Osgt6RobT1uqc/DsSQG8c0lvRKYEWxX7v7QUr4fLWKcV1tWrBrNI9TML+eOMZy+tu0eKySj+la0keWcCLgw/a+Nb0GP7m9GitLJ1uySR8WyTE4MfhrSsHViExJNl9O7BaGSm0hCyXa0Ay1HRzh7wElWtKReJASAVAqLAEZkk5CIJtvrPssglEhCrQvJRQbkv0WQ59A2sQrrC6Zqti1SJKiLKhV1klhPUM1HkfIevlCYLFjq63LQ4IskkAZXlzCQPP+0bjZPWvIWQi02dcoEvelq+IkGpSwUB5PFQQQI6gsVulz0CbKWlaVDvSzeSU/76Zx9DDCj9nUxzr0S6TzdnTQtBKpalATJb9mYmoosbj6HCOg7DbET5aJ0tV5C0hSSPCDv0gj3r92nlDpVuzqNYX4++G3vi/DpAJg3K7moVChvvbRuLWCAHGfhdm33qwNieJnVqmG5d27WTUFYTbnwBcHiNIApr3eU6wNnR2VzGD897lj5tpzSiTMWM0SZik8zIJeAoLpztw222TF3nloUZUsbghBZ/UufURHYEnLyEEGhBBH2bL2XOtaxKkS1LWcWGSRxLOSBqYD442ex+j1ptZ/6ezrXuvAXUDzWWHvFrdFurWTZ2m2pp87AhDf0k+hxX5nDSJ6hASLgwToGCeUDdBKp/Z3VRaFgKn2iXLBLNLBmLem4e5iQWbqmsqcFzp6yMSxQgNoySfeLDfe2OTUFYxbc+AxB4jSCVC09WGz+CaXyear3aPOb1XWA5GelsDdmOx0dJic/nPkg/GA5tYFVhbOqJB/wbWtKmcCchKgRqUEfxEW2r1c2+SCpMtM5Ds8hTq/yLY/R4vhtz4ZvwmkD72xyu6VgVy1OkqlqKFoUhYLFMxJSpPmDjGEdMbW2NZ7Wj4dolImJbBSu+9EqGIPkYqPph1dzbIDOs96bIAKlJOMySOYDvp1GNRvgtQOCCCCiLe6mtqFcqdZVH/DUJiX3IW98DyWH/AHxUMWF1Mv8ANzccPlCf1H4iGH8wTVzU+3+8FaP2vPSH+fshfjBuLWCHi+682FLsEDbn1vcOkEAEF2ftM78tITjA7iWA4TWEwZn7L5770PFzxNjQJ0gCune5hHlaJImJVLPjQpI5UkEH+Y9QMqeHU6wiM6P2tDpAcu2mzqlLXKWGUhapZfcUFj/EeUWP1tdHfhTRbkgBE1QQsYAiY2Cm5gMdRrER6K7DVbrQizglKSSpagHuIGZ8zgBqRBX1dEOiM7aK+z2JAXdXMIcA8KB41+w3xeWxNhyLFL+DIRdSGKlZrmGqlbz9G3R9VhsSJEtMmWgJShISEpGCU11O8neY+mn283nBKKVIdPKNYHH7XY1KqwmwOOD9rlOkRjpT03s+z+yp5k9sJaCMBuKzkj+dICUMXbxM77rtIHGHC7J0MUbbes+3zD2DLlJdwlKL59Vrd/aJf0D6fLtkz5W0hImqSSlaAyZgSHKSl8FM5DYFjhAiw66d7m8odK+HQawqfbzecKvn2uU6QDcftdjUqgxdvEz6XaRpule3U2CzLtKgFKDIQk4CYteCX9ydAYpG0dNdoLXf+cmJ7T3ZZCEJ0CRg3m8COh3H7XZOiodajvajSKj6MdaK0qCLaAtJZPxUJZaNVoGChqGOhi1rPOTMSlaFBSCApCklwsHWAr3p11epnXrTY0hE0upUoYIm1KNyV6ZHQ50+tBSSlQIUFFJBDFJGYI3GOpiM8d/a5fKK96z+iSZ0pVskoafLF5YR/wCrLGZI3rGb0B0gZqmotzqZ2YUS51rUP8RaZKH3hDlZ8rxA/YYrDY1iFonypCpgQFzEovKxCH3+e4akR0js2wos0pEiWLqEJCAnO6kb/M5k1MF19Vfu18odKt2dBrCp7c/nCrrnymkENx+18a3oIMX1ZgOIVhQGV7e2l38wNufLF+LSEXfmb0uwYftfs1vQA/v9usD+33awVr4vLSMJqwgXzklJUP0gOX9BAUx1ubYM21CzJV2JCcaX1gE/RN0fWJp1W7BFlsonrT/VtDTCDmmX4B9O166RUlkQraFtSFZ2i13laJWt1/RD/SOkEIuslIAITdAGQSMhBdNtcsSeIUg/OXJCDej9nVUafpZt1Ngsy56gCruJSclzD3B5Zk6AwRG+sTpp8mPlbOR8wodpWYkpOR1WdwOWdIpVa1KJUolSioqJUXKicySczHparQuatUyYsrWtRWpRzUo5mN9YOhVunyfmEWYlBF5N5SULWKoQS50rugqORuuhq1Jt9lKc/mpYw3glj7Exp5iFIJSoFKgopIUGKSMCCNxiW9V+z/jW9C27MpKpx/UBcQP8yx9IKvn85ckH4wPPCrXxaDSMqV8Oo1gyrbrpUoWezp3G0LV5NLwHuYp+Lv63LF8Sw30h/hWhExWl95Z9O2IpCC4InXVx0vNkmCyz1PZlqZJUf+3WclCiCc6Z1iDXcH3eWA8zCgrqc/xnzwyl8N5DuRgE0iFdWHSA2uzCWtTzrOUy8TjMQR2FH0BHprE1YZeF3JoqkGXPfTvYvyVsWhAKZa/60tsLqScUj9KgR9IunoZtj52xyp5Pbu3Jmq0YL+uB9Yi/XHs34lml2lu3KmhJbgmYf+YR9Y1/Uvb/APuLMTkUWhI1PYX/AAiCrTpr3eWCtBgrmMOuve5fKClR3eYawQMXZ8WcHhFIUDDLwu50VSFANtz63vxA+mjcGsDjPwuzb71YbF+ZnOqYIX4+/SNR0snlFhtSxmLLN/YSghveNvSh7vKdY0nTRF6wWoDMWZd7UgP+IKqDqtk3toyiz3Jc2Y2oQQP/ADi+W3Pre/0xRfVQttooAzVJnJD1uv8AiL1cZ+F21vVgaH00bg1iletza5m2pNlSp0yEB2PeWsAk+ibg+sXUAXbC94tUxzR0htBm2q0TD4rTMVjS+QPYCBj4rOU30X+5fTe/Q4v+zx1DKWkgKSxQUi6E5KS2BGjNHLUbqw9K7bIl/BlWtaEBN0AEG4KIJDo9DBdfd1klB2jPuEEAoCiMr4QL/q+erxZXVbsA2WzfGWlptoIWxHaQgdx6ZlXqIgXV30UNtm/MT0n5ZExzef8ArrzuvvD4qPpvi8wDl4mxbK7pA0fj74Pz9mkam29I7HJN2Za5KSO6krSVJOoDkesKydJbFNN1FskqJzAWkKUdAWgj7NrWFNpkzJCx2ZiFSyGzcYK9Cx9I5vOz1JtHyszsqE8SFP4TfCCfzHTYJwZrzOml2Kq62ejWW0ZKcOyic2YIwQv+AT5GBiybFs2VIlCQiWkSwm5cKQQ2RUrDEneTnFBdOdmIslunSZWCAUrSBkgLSF3RoH+kSexda89Eq4uzomTgm78QrKQsNmuWBnViH0iBW+2rnzFzpiry1qK1Fmcmg3DcBpBcSTq02mbPb5YvMiaDZ1ea8UH/ADgfWL7fe2GV3iNY5esc0y5iFjNMxC8NFA/iOoXJL+LMUuwNR7p9Iv7PtSTiRIMx/wBBCwPaKw6o51233eOzTE+TXFg+0Wn02WE7PtR8PyyxjneOH5iqOqdBO0EncmzzifJgPzAXp+M+eD85cukFPt89YK08XnpBA+mGTcRrCjLF+ZsKXYUAyou7drJtKwm3PgC4PEaQyC7P2s33NSMX0wdgN6TWAb++B5BHhbrOJktcs+OUuWOcLSR+Y98fbHmFBCp9vL5wHOfRO1fK2+QtfZuWgS1v4QSZa/o5+kdHOXdu13WqKxQPWTsn5a3TGDImn46Wy7ffA8lv9RFvdCdtfO2SXNf+oB8JZJyWjA/UMr1gut8BQ4A3geI0jnbptslVktk1CkkJXMXNQTktCyVhvJyD5R0S+mDsBwmsfHtLZcm0puWiSiYkFz8RIONUHMHyaCY5kicdD+r6daymbaAqTZ3fEXZk0UQD3AeI+lYtfZ3Rex2dQVJsktCndKrt5SPVTt6RuDvwwBxG9SqwWvKxWZElCZUuWEoQkIShOASmv94rXrht1olfAlomrTIXLXeEs3fiTEEYKIxIYjB2i0MX5md912kRvp10e+fspQgATEK+JKfDtAMUk7goOPNoI58A/wCCEf8Ajx6WiQuWpUtaChaVFKkrDKQoZgiPODSc9V+0rSbZLsyJ6/gFK1rQo30BCEk4P3C9wOGzi7JyAtJSpAIUkoKTiFJOBJFIr7qo6OKs8pdrmoZc1IShJDKTLzfS8WPkBWLExfmZ33XaQZ1RnTroOqwqM6SCuylTvmZJPhXpRfocc4VHUxAIZuyeyxxx10iHbW6tbDPWVpQuSrvK+XUEoV5IIIHo0FqmdhWBVptEqQgOVzUDAZJd1n0AJjpojc+r8OkRvoz0Qs2zyVSUKVNWGC5qgpYTvGAASPIYxIiRjh2XxqVQTdQrrYt3w7CpGSp01Eq7yg31n6IH1iLdS9iKp0+fuRKTL81LVfI+iPePg62dtfHtQkJU6LOkoN3IzFsV/QMn0MT/AKstlGzWFClJ7c5Zn6h8JYP7AD6wXiYfn7IPxh+rWFX7tRpBSvh0GsENtz54vw6QoThjwvjUq0ggGQG5XfW9DxfmbGgTAVb2wdrv5gbc+r8WkAmyp4dTrBX7tPKB/fBuHWD8ffAQ/rJ6PG2Wa+hLzpLzEADGYhu2jzIDjUCsVp1edJhYbRcmK/6eaUpX/wDWodxfpkdDpF9tufPF+HSKY6zOiBs6zbJCP6C1utIH+CsnNuBR+hw3iBi5kqfHAkjFi4u1EOmnd5jrFR9XXToSgmx2pTIwTLmKPcG5Czw0O7I4ZW4+WuXLrAFaHvcp0gcvzMw1TWA79M+eG258SHB4RSATDLwu7771IHL8zMdE1gfe2Ds2tYgnSXpLtDZqiqbZpdos97CbLvyy3DMHaCDrkfaA323+idltzGdL7d1krQbizoV7xoRGs2R1dWGzLEwoXNUku9oUFJQdxCQACfN40tn63JB79jmppcWhYT5Pdj7U9a1hbGXaNewg3/vgep65/cAyeYVgYZeF3fmpEDsvWMLUv4VjsU6bMOV9SEJQmq1Am6nUxNbLfugzLl/xJlg3QrR8SBU50EB7uXfxMxFE1gpQYp5jDY5Pizk8QpCfLXAcprAB3697liOdOekidn2crBHx1golJOLniIol382G+Ps6R7fk2CUZs5W9gkd+euiB/JyEURtTaNp2pagopK5i1CWhCO6hO5CKAZknUmBj6OhuwlbRtSULcoCvizlnO47kE1UcPUndHQqQ2Qbs3WGASnSI/wBDOjiNnWcS8FLUQqYoDvr05E5D1O+JExy3s5PEKQNKmnd5jBXXvcpgpr3eUwV073NFDcu+8BgOIVggYu28hweEUgiBF35va7CwblfCt6Minc+9734gfe2jcOsAq1bteWkA3fb/AHht7YvxaQvz9kAFseF+1+rSPOfJExJQtCVBSSkpUHSpBzBEer72ywbi1hNufW9TSApDpz0EXYyq0WcKXZiSSO8qRoreUc27fWMOh3WBNsYEmcDNs2AzdctPITmOU+hEXk9Rn2Wbu6xXnSvq0lzyqbZCmVM7xQQ0qYeVu4fJxoILUz2PtmRa0CbImpWBgAkspGi0HFJ842GGPC/aqFRzZarHa9mzReTMkTRkpJKb36FjBYiXbF61LRLZNplJnpyvJ7CzqfCo+ggkXK5fmb0uxipIIukAoyD43jQikRDZ3WRYJoZU1cpWf9dBDaXkOG9YkNm27ZZovItMlYODJmSzd1Z4DR7T6vbBPN74Jlqd1fLqKEjW5in6CPjsvVfYEF1fFXi6UrmMlXncAPvE1TNSclpLYuFA3tI85lslo701CX4lpTc+pgPPZ+zZNmR8KTKRLl+IIS3a/k+ZePscvzM2l2saG29MbBJ79rllsLqFXyo1ZDxFdq9a8hAKbPJXMU/emf00DTeoj6QFjsP2u4qVRCelfWHZ7JelySmfaCCkhB/pyzzrGZ0DnyisNv8ATO2W10rm3JZLfDkAoQdDvX6mPu6MdX1ptjLWn4ElnvTEstY5EZnzLDzgsaWdOtW07QHvzpy+ylIDJQmgGSED6Vi5OhHQyXs9F9ZC560ste6Xyo0qd/lhG26P9HbPYUXLPLYqa8tfamKI4lfgMBG3fe2AwI4jWCUOXfxMzbrtYGH7XcaqpDbc+Ob6UhPvbA4AcJrAOtT3uUaQqad3mGsH4z54PzlyQBhjwu50VSFA+9sBgRxGsEAyQ3K/reh4vj3mxpdgKsXbHK7pWMdHwd34jSAdKeHQ6wV+7Xygf3zHAKwn9sueAeLjibs6J1gcNyvjW9BX6k8JpBe3tizNUVgDFzxNj+mClPD56wg1d7vxaQ39/t1gPG1WVE1KkTEJWg95K0hSSfIxCdr9V1kmkmSpchZxAQb6G/QrEehieP7Zc8Gj6vwaQFKW/qttkvtSlypqXbBRlq+i8PeNDaehO0JZIVYphb/4wlY+wmOiL29tLv8Aqgwrre4tIFc1no9bB/7O0f8A5TMfaPSX0Xtq+7Yp585Sg31EdJXvfdw6wr3t98CqDsfV5tGYw+WCAcXmrQn2BJ9okmzOqQ4KtFrAS7FNnSSXpfX/ALRbHrq/BpBe3tpdrzQK0OxOh9ksbGVISZoxK5pvrAqCcAfICN9Sj9l831g0fW9xaQXvfdwawAd7/u/tDxfmAw1TGJPt98N9z6vwaQAwblf1vQ8ccrzY6JjG9vbS7/qh+ur8ekAqU8Op1h1+7Q6QP7/brA/t98AYuMrzdnVMED66vwaQoDIpLs/azfSkJwzt2XYChrAQMvC7vvvUgcu/iZiKJrANvqMTzCkKmvd5YMMKDFPMYK697l8ooHzoMDzGsNi7P2md6CkKlQGTzDWBhl4XcneFUiAcZtg7AUVWHWo73MITlyfFkdE1gpQd3mMUFNe7ywOMTuBZQ4jWCuve5Ybl33gMBxCsQJi7eJnflpA4z8LsBRVYGGT9l3fmpA5d27TMRRNYB1qB2uYQqa93l84KUGKeY0grr3uWAHGNAWVzGsDF28TODRNIb/UBgOIVhMMn7Lu9FUgBxn4XYCiqw2zG8B1cwhOXdu0zNRNYGyoMU8xpAFG393l84HGPC7K1VAd+ve5Yb72xAYDiFYAxfdeZ9LtITj9rsKhUDYM+Du+tIb72xZiOEVgCtfFqNIVPt084KUGI5jSD858kAOMeF2VqqFDffvAYDiFYIBk727LszZmsF0u29neopBBAFC2BwAbumsDZ6Z4d+CCAV05byHB4RSB8HbB2ZszWCCAd0uRvZyaikKlDgnlMKCAddO9zQ7pdt5Dg8IpCggBxm3Zdm5qw7pdvEzk1FIIIoVKHBPKawV073NCggGxwG8hxyikDjNuy7NVVYUEQO6XbxM5NU0gpQ4J5TWFBAM733d7mgYu3iZ06JpBBADjPwuzb71YGLt4mcmqaQQQBSh7vKYK6d7m8oUEUNj6kOnlFIIIIg//Z" alt="logo"/>
      </div>
      
    </div>
  )
}