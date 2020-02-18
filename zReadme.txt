=================================
       Component Structure
=================================



===============ViewPanel===============
    HOC 
     -withSearch()





-Container.js = 
    -View.js 
    -



Change to Render props pattern 
Change Axios Request to axios.get() 





      // axios({
      //   method: "put",
      //   url: url,
      //   data: itemData,
      //   headers: { "Content-Type": "application/json" }
      // })
      //   .then(res => {
      //     console.log(res.data);
      //     const datos = res.data.proyecto;
      //     // const notificationMsg = res.data.mensaje
      //     this.setState({ data: datos });
      //     // NotificationManager.success("Éxito");
      //   })

      //   .catch(error => {
      //     console.log(error);
      //     console.log("holaaa");
      //     // NotificationManager.error("Error");
      //   });